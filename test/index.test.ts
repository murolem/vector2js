import Vector2 from '../src/index';
const assert = require('assert');

const generateVectorComponents = (): [number, number] => [
	Math.floor(Math.random() * 100 - 50),
	Math.floor(Math.random() * 100 - 50),
];

describe('Vector2', function() {
	describe('INSTANCE functionality', function() {
		describe('#constructor()', function() {
			it('should set both components of a brand new Vector2 properly if there were no arguments provided.', function() {
				const vector = new Vector2();
				assert.strictEqual(vector.x, 0, 'x');
				assert.strictEqual(vector.y, 0, 'y');	
				assert.strictEqual(vector[0], 0, '0');
				assert.strictEqual(vector[1], 0, '1');
			});
	
			it('should set both components of a brand new Vector2 instance if there was one argument - of a type \'number\' - provided.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(components[0]);
				assert.strictEqual(vector.x, components[0], 'x');
				assert.strictEqual(vector.y, components[0], 'y');	
				assert.strictEqual(vector[0], components[0], '0');
				assert.strictEqual(vector[1], components[0], '1');
			});
	
			it('should set both components of a brand new Vector2 instance if there were two arguments - both of a type \'number\' - provided.', function() {
				const components = generateVectorComponents();
				const vector = new Vector2(components[0], components[1]);
				assert.strictEqual(vector.x, components[0], 'x');
				assert.strictEqual(vector.y, components[1], 'y');
				assert.strictEqual(vector[0], components[0], '0');
				assert.strictEqual(vector[1], components[1], '1');
			});
	
			it('should set both components of a brand new Vector2 instance if there was one argument - of type \'Vector2\' - provided.', function() {
				const vectorFrom = new Vector2(...generateVectorComponents());
				const vector = new Vector2(vectorFrom);
				assert.strictEqual(vector.x, vectorFrom[0], 'x');
				assert.strictEqual(vector.y, vectorFrom[1], 'y');
				assert.strictEqual(vector[0], vectorFrom[0], '0');
				assert.strictEqual(vector[1], vectorFrom[1], '1');
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
				const vector = new Vector2(123, 321);
				const copy = vector.copy();
				assert.strictEqual(vector.isEquals(copy), true);
			});
		});

		describe('#clamp()', function() {
			describe('PROPER flow', function() {
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

			describe('REVERSED flow', function() {
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
			it('should divide both components of the currently tested Vector2 instance by one argument of a type \'number\' and set each component equal to a remainder of that division', function() {
				const vector = new Vector2(17, -23);
				vector.mod(8);
				assert.strictEqual(vector.x, 1, 'x');
				assert.strictEqual(vector.y, -7, 'y');
			});

			it('should divide both components of the currently tested Vector2 instance by two arguments both of a type \'number\' and set each component equal to a remainder of that division', function() {
				const vector = new Vector2(17, -23);
				vector.mod(8, 13);
				assert.strictEqual(vector.x, 1, 'x');
				assert.strictEqual(vector.y, -10, 'y');
			});
		});
	});
});