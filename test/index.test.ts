import { Vector2 } from '../src/index';
const assert = require('assert');

const generateVectorComponents = (): [number, number] => [
	Math.floor(Math.random() * 100 - 50),
	Math.floor(Math.random() * 100 - 50),
];

const fuzzyEqual = (actual: number, expected: number, thresold: number, msg?: string) => {
	if(Math.abs(actual - expected) > thresold) assert.fail(msg === undefined ? `expected '${expected}, got '${actual}'` : msg);
};

const errorMargin = Math.pow(10, -12);

describe('Vector2', function() {
	describe('INSTANCE functionality', function() {
		describe('#constructor()', function() {
			it('should set both components of a brand new Vector2 properly if there were no arguments provided.', function() {
				const vector = new Vector2();
				assert.strictEqual(vector.x, 0, 'x');
				assert.strictEqual(vector.y, 0, 'y');	
				assert.strictEqual(vector[0], 0, '0');
				assert.strictEqual(vector[1], 0, '1');
				assert.strictEqual(vector.u, 0, 'u');
				assert.strictEqual(vector.v, 0, 'v');
			});
	
			it('should set both components of a brand new Vector2 instance if there was one argument - of a type \'number\' - provided.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(components[0]);
				assert.strictEqual(vector.x, components[0], 'x');
				assert.strictEqual(vector.y, components[0], 'y');	
				assert.strictEqual(vector[0], components[0], '0');
				assert.strictEqual(vector[1], components[0], '1');
				assert.strictEqual(vector.u, components[0], 'u');
				assert.strictEqual(vector.v, components[0], 'v');	
			});
	
			it('should set both components of a brand new Vector2 instance if there were two arguments - both of a type \'number\' - provided.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(components[0], components[1]);
				assert.strictEqual(vector.x, components[0], 'x');
				assert.strictEqual(vector.y, components[1], 'y');
				assert.strictEqual(vector[0], components[0], '0');
				assert.strictEqual(vector[1], components[1], '1');
				assert.strictEqual(vector.u, components[0], 'u');
				assert.strictEqual(vector.v, components[1], 'v');
			});
	
			it('should set both components of a brand new Vector2 instance if there was one argument - of type \'Vector2\' - provided.', function() {
				const vectorFrom = new Vector2(...generateVectorComponents());
				const vector = new Vector2(vectorFrom);
				assert.strictEqual(vector.x, vectorFrom[0], 'x');
				assert.strictEqual(vector.y, vectorFrom[1], 'y');
				assert.strictEqual(vector[0], vectorFrom[0], '0');
				assert.strictEqual(vector[1], vectorFrom[1], '1');
				assert.strictEqual(vector.u, vectorFrom[0], 'u');
				assert.strictEqual(vector.v, vectorFrom[1], 'v');
			});
		});

		describe('#[index signatures]', function() {
			it('should return the \'x\' component of the currently tested Vector2 instance when refered to the index signature \'[0]\'.', function() {
				const vector = new Vector2(...generateVectorComponents());
				assert.strictEqual(vector.x, vector[0]);
			});

			it('should return the \'y\' component of the currently tested Vector2 instance when refered to the index signature \'[1]\'.', function() {
				const vector = new Vector2(...generateVectorComponents());
				assert.strictEqual(vector.y, vector[1]);
			});
		});

		describe('#add()', function() {
			it('should add a number to both components of the currently tested Vector2 instance.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				vector.add(15);
				assert.strictEqual(vector.x, components[0] + 15);
				assert.strictEqual(vector.y, components[1] + 15);
			});

			it('should add two numbers to both components of the currently tested Vector2 instance, respectively.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				vector.add(15, 25);
				assert.strictEqual(vector.x, components[0] + 15);
				assert.strictEqual(vector.y, components[1] + 25);
			});

			it('should add both components of a given Vector2 instance to both components of the currently tested Vector2 instance, respectively.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				const vectorAnother = new Vector2(...generateVectorComponents());
				vector.add(vectorAnother);
				assert.strictEqual(vector.x, components[0] + vectorAnother.x);
				assert.strictEqual(vector.y, components[1] + vectorAnother.y);
			});
		});

		describe('#sub()', function() {
			it('should subtract a number from both components of the currently tested Vector2 instance.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				vector.sub(15);
				assert.strictEqual(vector.x, components[0] - 15);
				assert.strictEqual(vector.y, components[1] - 15);
			});

			it('should subtract two numbers from both components of the currently tested Vector2 instance, respectively.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				vector.sub(15, 25);
				assert.strictEqual(vector.x, components[0] - 15);
				assert.strictEqual(vector.y, components[1] - 25);
			});

			it('should subtract both components of a given Vector2 instance from both components of the currently tested Vector2 instance, respectively.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				const vectorAnother = new Vector2(...generateVectorComponents());
				vector.sub(vectorAnother);
				assert.strictEqual(vector.x, components[0] - vectorAnother.x);
				assert.strictEqual(vector.y, components[1] - vectorAnother.y);
			});
		});

		describe('#mult()', function() {
			it('should multiply both components of the currently tested Vector2 instance by a given number.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				vector.mult(5);
				assert.strictEqual(vector.x, components[0] * 5);
				assert.strictEqual(vector.y, components[1] * 5);
			});

			it('should multiply both components of the currently tested Vector2 instance by two given numbers, respectively.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				vector.mult(5, 15);
				assert.strictEqual(vector.x, components[0] * 5);
				assert.strictEqual(vector.y, components[1] * 15);
			});

			it('should multiply both components of the currently tested Vector2 instance by the components of a given Vector2 instance, respectively.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(...components);
				const vectorAnother = new Vector2(...generateVectorComponents());
				vector.mult(vectorAnother);
				assert.strictEqual(vector.x, components[0] * vectorAnother.x);
				assert.strictEqual(vector.y, components[1] * vectorAnother.y);
			});
		});

		
		describe('#div()', function() {
			it('should divide both components of the currently tested Vector2 instance by a given number.', function() {
				const components: [number, number] = [40, -25];
				const vector = new Vector2(...components);
				vector.div(5);
				assert.strictEqual(vector.x, 8);
				assert.strictEqual(vector.y, -5);
			});

			it('should divide both components of the currently tested Vector2 instance by two given numbers, respectively.', function() {
				const components: [number, number] = [40, -30];
				const vector = new Vector2(...components);
				vector.div(5, 15);
				assert.strictEqual(vector.x, 8);
				assert.strictEqual(vector.y, -2);
			});

			it('should divide both components of the currently tested Vector2 instance by the components of a given Vector2 instance, respectively.', function() {
				const components: [number, number] = [40, -30];
				const vector = new Vector2(...components);
				const vectorAnother = new Vector2(2, -10);
				vector.div(vectorAnother);
				assert.strictEqual(vector.x, 20);
				assert.strictEqual(vector.y, 3);
			});
		});

		describe('#toString()', function() {
			it('should return a string representation of the currently tested Vector2 instance.', function() {
				const vector = new Vector2(...generateVectorComponents());
				assert.strictEqual(vector.toString(), `[${vector.x}, ${vector.y}]`);
			});
		});

		describe('#max <- get', function() {
			it('should return the largest of two components of the currently tested Vector2 instance.', function() {
				const vector = new Vector2(...generateVectorComponents());
				assert.strictEqual(vector.max, Math.max(vector[0], vector[1]));
			});
		});

		describe('#min <- get', function() {
			it('should return the smallest of two components of the currently tested Vector2 instance.', function() {
				const vector = new Vector2(...generateVectorComponents());
				assert.strictEqual(vector.min, Math.min(vector[0], vector[1]));
			});
		});

		describe('#sqrMag <- get', function() {
			it('should return the squared magnitude of the currently tested Vector2 instance.', function() {
				const vector = new Vector2(3, 5);
				assert.strictEqual(vector.sqrMag, 34);
			});
		});

		describe('#normalize()', function() {
			it('should normalize the currently tested Vector2 instance if magnitude is more than 0', function() {
				const vector = new Vector2(3, 4);
				vector.normalize();
				assert.strictEqual(vector.mag, 1);
			});

			it('should normalize the currently tested Vector2 instance if magnitude is equal to 0', function() {
				const vector = new Vector2();
				vector.normalize();
				assert.strictEqual(vector.mag, 0);
			});
		});

		describe('#mag', function() {
			it('should return the magnitude of the currently tested Vector2 instance.', function() {
				const vector = new Vector2(3, 4);
				assert.strictEqual(vector.mag, 5);
			});

			it('should set the magnitude of the currently tested Vector2 instance if given magnitude is more than zero.', function() {
				const vector = new Vector2(1, 1);
				vector.mag = 10;
				assert.strictEqual(vector.mag, 10);
			});

			it('should set the magnitude of the currently tested Vector2 instance if given magnitude is less than zero.', function() {
				const vector = new Vector2(1, 1);
				vector.mag = -5;
				assert.strictEqual(vector.mag, 0);
			});

			it('should set the magnitude of the currently tested Vector2 instance if given magnitude is equal to zero.', function() {
				const vector = new Vector2(1, 1);
				vector.mag = 0;
				assert.strictEqual(vector.mag, 0);
			});
		});

		describe('#setMag()', function() {
			it('should set the the magnitude of the currently tested Vector2 instance equal to a given number.', function() {
				const vector = new Vector2(1, 1);
				vector.setMag(10);
				assert.strictEqual(vector.mag, 10);
			});

			it('should set the magnitude of the currently tested Vector2 instance equal to a magnitude of a given Vector2 instance.', function() {
				const vector = new Vector2(1, 0);
				vector.setMag(new Vector2(100, 0));
				assert.strictEqual(vector.mag, 100);
			});
		});

		describe('#angle', function() {
			it('should return the angle (in radians) of the currently tested Vector2 instance.', function() {
				const vector = new Vector2(1, 1);
				assert.strictEqual(vector.angle, Math.PI / 4);
			});

			it('should set the angle (in radians) of the currently tested Vector2 instance.', function() {
				const vector = new Vector2(1, 1);
				vector.angle = -Math.PI / 2;
				assert.strictEqual(vector.angle, -Math.PI / 2);
			});
		});

		describe('#rotateTo()', function() {
			it('should rotate the currently tested Vector2 instance to a given angle (in radians).', function() {
				const vector = new Vector2(0, 1);
				vector.rotateTo(-Math.PI / 4);
				assert.strictEqual(vector.angle, -Math.PI / 4);
			});

			it('should rotate the currently tested Vector2 instance to an angle (in radians) of a given Vector2 instance.', function() {
				const vector = new Vector2(0, 1);
				vector.rotateTo(new Vector2(.5, .5));
				assert.strictEqual(vector.angle, Math.PI / 4);
			});
		});

		describe('#rotateBy()', function() {
			it('should rotate the currently tested Vector2 instance by a given angle (in radians).', function() {
				const vector = new Vector2(0, 1);
				vector.rotateBy(Math.PI / 4);
				assert.strictEqual(vector.angle, Math.PI / 4 * 3);
			});

			it('should rotate the currently tested Vector2 instance by an angle (in radians) of a given Vector2 instance.', function() {
				const vector = new Vector2(0, 1); // Math.PI / 2
				vector.rotateBy(new Vector2(0, 1)); // Math.PI / 4
				assert.strictEqual(vector.angle, Math.PI);
			});
		});

		describe('#negate()', function() {
			it('should reverse the currently tested Vector2 instance.', function() {
				const vector = new Vector2(-1337, 420);
				vector.negate();
				assert.strictEqual(vector.x, 1337);
				assert.strictEqual(vector.y, -420);
			});
		});

		describe('#isEquals()', function() {
			it('should check if the currently tested Vector2 instance component values are equal to a corresponding component value of a given Vector2 instance.', function() {
				const vector = new Vector2(-42, 54);
				assert.strictEqual(vector.isEquals(new Vector2(-42, 54)), true);
				assert.strictEqual(vector.isEquals(new Vector2()), false);
			});
		});

		describe('#copy()', function() {
			it('should create a new Vector2 instance off currently tested Vector2 instance.', function() {
				const vectorComponents = [123, 321];
				const vector = new Vector2(vectorComponents[0], vectorComponents[1]);
				const copy = vector.copy();
				vector.set(50, 100);
				assert.strictEqual(copy.x, vectorComponents[0]);
				assert.strictEqual(copy.y, vectorComponents[1]);
			});
		});

		describe('#clamp()', function() {
			describe('GROUP | forward flow', function() {
				it('should constrain the currently tested Vector2 instance if there were no arguments provided', function() {
					const vector = new Vector2(0.7, 33333);
					vector.clamp();
					assert.strictEqual(vector.isEquals(new Vector2(0.7, 1)), true);
				});
	
				it('should constrain the currently tested Vector2 instance if there was one argument - of a type \'number\' - provided', function() {
					const vector = new Vector2(3844, -13.24);
					vector.clamp(150);
					assert.strictEqual(vector.isEquals(new Vector2(150, 0)), true);
				});
	
				it('should constrain the currently tested Vector2 instance if there were two arguments - both of a type \'number\' - provided', function() {
					const vector = new Vector2(3844, -13.24);
					vector.clamp(-8, 12);
					assert.strictEqual(vector.isEquals(new Vector2(12, -8)), true);
				});
	
				it('should constrain the currently tested Vector2 instance if there were four arguments - all of a type \'number\' - provided', function() {
					const vector = new Vector2(3844, -13.24);
					vector.clamp(-8, 12, 325, 1000);
					assert.strictEqual(vector.isEquals(new Vector2(12, 325)), true);
				});
			});

			describe('GROUP | reversed flow', function() {
				it('should constrain the currently tested Vector2 instance if there was one argument - of a type \'number\' - provided, but order is reversed.', function() {
					const vector = new Vector2(100, -50);
					vector.clamp(-75);
					assert.strictEqual(vector.isEquals(new Vector2(0, -50)), true);
				});
	
				it('should constrain the currently tested Vector2 instance if there were two arguments - both of a type \'number\' - provided, but order is reversed.', function() {
					const vector = new Vector2(100, -50);
					vector.clamp(25, 0);
					assert.strictEqual(vector.x, 25, 'x');
					assert.strictEqual(vector.y, 0, 'y');
				});
	
				it('should constrain the currently tested Vector2 instance if there were four arguments - all of a type \'number\' - provided, but order on \'x\' is reversed.', function() {
					const vector = new Vector2(100, -65);
					vector.clamp(125, 25, -95, -50);
					assert.strictEqual(vector.x, 100, 'x');
					assert.strictEqual(vector.y, -65, 'y');
				});

				it('should constrain the currently tested Vector2 instance if there were four arguments - all of a type \'number\' - provided, but order on \'y\' is reversed.', function() {
					const vector = new Vector2(100, -65);
					vector.clamp(25, 125, -50, -95);
					assert.strictEqual(vector.x, 100, 'x');
					assert.strictEqual(vector.y, -65, 'y');
				});

				it('should constrain the currently tested Vector2 instance if there were four arguments - all of a type \'number\' - provided, but order for both \'x\' and \'y\' is reversed.', function() {
					const vector = new Vector2(100, -65);
					vector.clamp(125, 25, -50, -95);
					assert.strictEqual(vector.x, 100, 'x');
					assert.strictEqual(vector.y, -65, 'y');
				});
			});
		});

		describe('#round()', function() {
			it('should round the currently tested Vector2 instance component values is values are positive.', function() {
				const vector = new Vector2(13.5, 5.3);
				vector.round();
				assert.strictEqual(vector.x, 14);
				assert.strictEqual(vector.y, 5);
			});

			it('should round the currently tested Vector2 instance component values is values are negative.', function() {
				const vector = new Vector2(-13.5, -5.3);
				vector.round();
				assert.strictEqual(vector.x, -13);
				assert.strictEqual(vector.y, -5);
			});
		});

		describe('#ceil()', function() {
			it('should round the currently tested Vector2 instance component values to the nearest larger integer if values are positive.', function() {
				const vector = new Vector2(13.5, 5.3);
				vector.ceil();
				assert.strictEqual(vector.x, 14);
				assert.strictEqual(vector.y, 6);
			});

			it('should round the currently tested Vector2 instance component values to the nearest larger integer if values are negative.', function() {
				const vector = new Vector2(-13.5, -5.3);
				vector.ceil();
				assert.strictEqual(vector.x, -13);
				assert.strictEqual(vector.y, -5);
			});
		});

		describe('#floor()', function() {
			it('should round the currently tested Vector2 instance component values to the nearest smaller integer if values are positive.', function() {
				const vector = new Vector2(13.5, 5.3);
				vector.floor();
				assert.strictEqual(vector.x, 13);
				assert.strictEqual(vector.y, 5);
			});

			it('should round the currently tested Vector2 instance component values to the nearest smaller integer if values are negative.', function() {
				const vector = new Vector2(-13.5, -5.3);
				vector.floor();
				assert.strictEqual(vector.x, -14);
				assert.strictEqual(vector.y, -6);
			});
		});

		describe('#mod()', function() {
			it('should divide both components of the currently tested Vector2 instance by one argument of a type \'number\' and set each component equal to a remainder of that division.', function() {
				const vector = new Vector2(17, -23);
				vector.mod(8);
				assert.strictEqual(vector.x, 1, 'x');
				assert.strictEqual(vector.y, -7, 'y');
			});

			it('should divide both components of the currently tested Vector2 instance by two arguments both of a type \'number\' and set each component equal to a remainder of that division.', function() {
				const vector = new Vector2(17, -23);
				vector.mod(8, 13);
				assert.strictEqual(vector.x, 1, 'x');
				assert.strictEqual(vector.y, -10, 'y');
			});
		});

		describe('#lerp()', function() {
			it('should linearly interpolate currently tested Vector2 instance between the two given Vector2 instances.', function() {
				const vectorFrom = new Vector2(-100, 50);
				const vectorTo = new Vector2(300, 90);
				const vector = new Vector2().lerp(vectorFrom, vectorTo, .25);
				assert.strictEqual(vector.x, 0, 'x');
				assert.strictEqual(vector.y, 60, 'y');
			});
		});
	});

	describe('STATIC functionality', function() {
		describe('add()', function() {
			it('should add any number of the given Vector2 instances together.', function() {
				const vectors: [Vector2, Vector2, ...Vector2[]] = [
					new Vector2(3, 15),
					new Vector2(12, 25),
					new Vector2(85, -140)
				];
				const vector = Vector2.add(...vectors);
				assert.strictEqual(vector.x, 100, 'x');
				assert.strictEqual(vector.y, -100, 'y');
			});
		});

		describe('sub()', function() {
			it('should sequentially subtract the given Vector2 instances.', function() {
				const vectors: [Vector2, Vector2, ...Vector2[]] = [
					new Vector2(100, -100),
					new Vector2(3, 15),
					new Vector2(12, 25),
					new Vector2(85, -140)
				];
				const vector = Vector2.sub(...vectors);
				assert.strictEqual(vector.x, 0, 'x');
				assert.strictEqual(vector.y, 0, 'y');
			});
		});

		describe('mult()', function() {
			it('should multiply the given Vector2 instances together.', function() {
				const vectors: [Vector2, Vector2, ...Vector2[]] = [
					new Vector2(111, -50),
					new Vector2(10, -10),
					new Vector2(-2, 3),
				];
				const vector = Vector2.mult(...vectors);
				assert.strictEqual(vector.x, -2220, 'x');
				assert.strictEqual(vector.y, 1500, 'y');
			});
		});

		describe('div()', function() {
			it('should sequentially divide the given Vector2 instances.', function() {
				const vectors: [Vector2, Vector2, ...Vector2[]] = [
					new Vector2(1000, -50),
					new Vector2(50, -10),
					new Vector2(-2, 5),
				];
				const vector = Vector2.div(...vectors);
				assert.strictEqual(vector.x, -10, 'x');
				assert.strictEqual(vector.y, 1, 'y');
			});
		});

		describe('dist()', function() {
			it('should return the distance between the two given Vector2 instances.', function() {
				const vector1 = new Vector2(100, 200);
				const vector2 = new Vector2(55, 28);
				const vectorBetween = Vector2.sub(vector2, vector1);
				fuzzyEqual(Vector2.dist(vector1, vector2), vectorBetween.mag, errorMargin);
			});
		});

		describe('fromAngle()', function() {
			describe('GROUP | angle is positive or zero, magnitude is unspecified (assuming 0 to PI * 2 radians angle mode).', function() {
				it('should create a new Vector2 instance with the angle is equal to zero.', function() {
					const vector = Vector2.fromAngle(0);
					assert.strictEqual(vector.angle, 0);
				});

				it('should create a new Vector2 instance with the angle is more than zero but less than PI.', function() {
					const vector = Vector2.fromAngle(Math.PI / 3);
					assert.strictEqual(vector.angle, Math.PI / 3);
				});

				it('should create a new Vector2 instance with the angle is equal to PI.', function() {
					const vector = Vector2.fromAngle(Math.PI);
					assert.strictEqual(vector.angle, Math.PI);
				});

				it('should create a new Vector2 instance with the angle is more than PI but less than PI * 2.', function() {
					const vector = Vector2.fromAngle(Math.PI + Math.PI / 6);
					fuzzyEqual (vector.angle, -Math.PI / 6 * 5, errorMargin);
				});

				it('should create a new Vector2 instance with the angle equal to PI * 2.', function() {
					const vector = Vector2.fromAngle(Math.PI * 2);
					fuzzyEqual (vector.angle, 0, errorMargin);
				});

				it('should create a new Vector2 instance with the angle more than PI * 2.', function() {
					const vector = Vector2.fromAngle(Math.PI * 2 + Math.PI / 3);
					fuzzyEqual (vector.angle, Math.PI / 3, errorMargin);
				});
			});

			describe('GROUP | angle is negative, magnitude is unspecified (assuming 0 to PI * 2 radians angle mode).', function() {
				it('should create a new Vector2 instance with the angle is less than zero but more than -PI.', function() {
					const vector = Vector2.fromAngle(-Math.PI / 3);
					assert.strictEqual(vector.angle, -Math.PI / 3);
				});

				it('should create a new Vector2 instance with the angle is equal to -PI.', function() {
					const vector = Vector2.fromAngle(-Math.PI);
					assert.strictEqual(vector.angle, -Math.PI);
				});

				it('should create a new Vector2 instance with the angle is less than -PI but more than -PI * 2.', function() {
					const vector = Vector2.fromAngle(-Math.PI - Math.PI / 6);
					fuzzyEqual (vector.angle, Math.PI / 6 * 5, errorMargin);
				});

				it('should create a new Vector2 instance with the angle equal to -PI * 2.', function() {
					const vector = Vector2.fromAngle(-Math.PI * 2);
					fuzzyEqual (vector.angle, 0, errorMargin);
				});

				it('should create a new Vector2 instance with the angle less than -PI * 2.', function() {
					const vector = Vector2.fromAngle(-Math.PI * 2 - Math.PI / 3);
					fuzzyEqual (vector.angle, -Math.PI / 3, errorMargin);
				});
			});

			it('should create a new Vector2 instance with the magnitude set to 0.', function() {
				const vector = Vector2.fromAngle(Math.PI / 2, 0);
				assert.strictEqual(vector.x, 0);
				assert.strictEqual(vector.y, 0);
			}); 
		});

		describe('angleBetween()', function() {
			it('should return the angle between the two given Vector2 instances, if the angles of the given instances are in range (0, PI).', function() {
				const vector1 = Vector2.fromAngle(Math.PI / 4);
				const vector2 = Vector2.fromAngle(Math.PI / 2);
				fuzzyEqual(Vector2.angleBetween(vector1, vector2), Math.PI / 4, errorMargin);
			});

			it('should return the angle between the two given Vector2 instances, if the angle of the first instance is in range (0, PI) and the angle of the second instance is in range (PI, PI * 2) (assuming 0 to PI * 2 radians angle mode).', function() {
				const vector1 = Vector2.fromAngle(Math.PI / 2);
				const vector2 = Vector2.fromAngle(Math.PI + Math.PI / 2);
				fuzzyEqual(Vector2.angleBetween(vector1, vector2), Math.PI, errorMargin);
			});

			it('should return the angle between the two given Vector2 instances, if the angles of the given instances are in range (PI, PI * 2) (assuming 0 to PI * 2 radians angle mode).', function() {
				const vector1 = Vector2.fromAngle(Math.PI + Math.PI / 4);
				const vector2 = Vector2.fromAngle(Math.PI + Math.PI / 2);
				fuzzyEqual(Vector2.angleBetween(vector1, vector2), Math.PI / 4, errorMargin);
			});
		});

		describe('angleBetweenSigned()', function() {
			describe('GROUP | the angles of the given instances are in range (0, PI).', function() {
				it('should return the signed angle between the two given Vector2 instances, if the angle of the first instance is larger than the angle of the second instance.', function() {
					const vector1 = Vector2.fromAngle(Math.PI / 2);
					const vector2 = Vector2.fromAngle(Math.PI / 4);
					fuzzyEqual(Vector2.angleBetweenSigned(vector1, vector2), -Math.PI / 4, errorMargin);
				});

				it('should return the signed angle between the two given Vector2 instances, if the angle of the first instance is smaller than the angle of the second instance.', function() {
					const vector1 = Vector2.fromAngle(Math.PI / 4);
					const vector2 = Vector2.fromAngle(Math.PI / 2);
					fuzzyEqual(Vector2.angleBetweenSigned(vector1, vector2), Math.PI / 4, errorMargin);
				});
			});

			describe('GROUP | the angle of the first instance is in range (0, PI) and the angle of the second instance is in range (PI, PI * 2) (assuming 0 to PI * 2 radians angle mode).', function() {
				describe('GROUP | the angle range is less than PI', function() {
					it('should return the signed angle between the two given Vector2 instances, if the angle of the first instance is larger than the angle of the second instance.', function() {
						const vector1 = Vector2.fromAngle(Math.PI + Math.PI / 4);
						const vector2 = Vector2.fromAngle(Math.PI / 2);
						fuzzyEqual(Vector2.angleBetweenSigned(vector1, vector2), -(Math.PI / 4 + Math.PI / 2) , errorMargin);
					});
	
					it('should return the signed angle between the two given Vector2 instances, if the angle of the first instance is smaller than the angle of the second instance.', function() {
						const vector1 = Vector2.fromAngle(Math.PI / 2);
						const vector2 = Vector2.fromAngle(Math.PI + Math.PI / 4);
						fuzzyEqual(Vector2.angleBetweenSigned(vector1, vector2), Math.PI / 4 + Math.PI / 2 , errorMargin);
					});
				});

				describe('GROUP | the angle range is more than PI', function() {
					it('should return the signed angle between the two given Vector2 instances, if the angle of the first instance is larger than the angle of the second instance.', function() {
						const vector1 = Vector2.fromAngle(Math.PI + Math.PI / 2);
						const vector2 = Vector2.fromAngle(Math.PI / 4);
						fuzzyEqual(Vector2.angleBetweenSigned(vector1, vector2), Math.PI / 2 + Math.PI / 4, errorMargin);
					});
	
					it('should return the signed angle between the two given Vector2 instances, if the angle of the first instance is smaller than the angle of the second instance.', function() {
						const vector1 = Vector2.fromAngle(Math.PI / 4);
						const vector2 = Vector2.fromAngle(Math.PI + Math.PI / 2);
						fuzzyEqual(Vector2.angleBetweenSigned(vector1, vector2), -(Math.PI / 2 + Math.PI / 4), errorMargin);
					});
				});
			});

			describe('GROUP | the angles of the given instances are in range (PI, PI * 2).', function() {
				it('should return the signed angle between the two given Vector2 instances, if the angle of the first instance is larger than the angle of the second instance.', function() {
					const vector1 = Vector2.fromAngle(Math.PI + Math.PI / 2);
					const vector2 = Vector2.fromAngle(Math.PI + Math.PI / 4);
					fuzzyEqual(Vector2.angleBetweenSigned(vector1, vector2), -Math.PI / 4, errorMargin);
				});

				it('should return the signed angle between the two given Vector2 instances, if the angle of the first instance is smaller than the angle of the second instance.', function() {
					const vector1 = Vector2.fromAngle(Math.PI + Math.PI / 4);
					const vector2 = Vector2.fromAngle(Math.PI + Math.PI / 2);
					fuzzyEqual(Vector2.angleBetweenSigned(vector1, vector2), Math.PI / 4, errorMargin);
				});
			});
		});

		describe('dot()', function() {
			it('should calculate the dot product of the two given Vector2 instances.', function() {
				const vector1 = new Vector2(1, 3);
				const vector2 = new Vector2(4, -2);
				fuzzyEqual(Vector2.dot(vector1, vector2), -2, errorMargin);
			});
		});

		describe('lerp()', function() {
			it('should linearly interpolate between the two given Vector2 instances', function() {
				const vectorFrom = new Vector2(-100, 50);
				const vectorTo = new Vector2(300, 90);
				const vector = new Vector2();
				Vector2.lerp(vector, vectorFrom, vectorTo, .25);
				assert.strictEqual(vector.x, 0, 'x');
				assert.strictEqual(vector.y, 60, 'y');
			});
		});

		describe('zero()', function() {
			it('should return the new Vector2 instance with both its components set to 0.', function() {
				const vector = Vector2.zero();
				assert.strictEqual(vector.x, 0);
				assert.strictEqual(vector.y, 0);
			});
		});

		describe('random()', function() {
			it('should generate a new Vector2 instance which meets the critera of a random unit vector, magnitude is unspecified; checking magnitude.', function() {
				const vector = Vector2.random();
				fuzzyEqual(vector.mag, 1, errorMargin);
			});

			it('should generate a new Vector2 instance which meets the critera of a random unit vector, magnitude is unspecified; checking angles.', function() {
				const angleSectionsOfPiDiv4Times4Used = {};
				for(let i = 0; i < 100; i++) {
					const vector = Vector2.random();
					angleSectionsOfPiDiv4Times4Used[vector.angle >= 0
						? vector.angle <= Math.PI / 2 
							? 0
							: 1 
						: vector.angle <= -Math.PI / 2
							? 2
							: 3] = true;
					fuzzyEqual(vector.mag, 1, errorMargin);
				}
				assert.strictEqual(Object.keys(angleSectionsOfPiDiv4Times4Used).length, 4);
			});
		});
	});
});