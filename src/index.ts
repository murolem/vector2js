interface IVector2 {
	x: number,
	y: number,
	readonly 0: number,
	readonly 1: number,

	toString(): string;

	readonly max: number;
	readonly min: number;

	mag: number;
	angle: number;

	set(...args: [] | [number] | [number, number] | [Vector2]) : Vector2,
	add(...args: [number] | [number, number] | [Vector2]): Vector2;
	sub(...args: [number] | [number, number] | [Vector2]): Vector2;
	mult(...args: [number] | [number, number] | [Vector2]): Vector2;
	div(...args: [number] | [number, number] | [Vector2]): Vector2;
	setMag(arg: number | Vector2): Vector2;
	rotateTo(arg: number | Vector2): Vector2;
	rotateBy(arg: number | Vector2): Vector2;
	normalize(): Vector2;
	negate(): Vector2;
	isEquals(vector: Vector2): boolean;
	copy(): Vector2;
	clamp(...args: [] | [number] | [number, number] | [number, number, number, number]): Vector2;
	round(): Vector2;
	ceil(): Vector2;
	floor(): Vector2;
	mod(...args: [number] | [number, number]): Vector2;
	lerp(vector1: Vector2, vector2: Vector2, t: number): Vector2;
}

export const RAD2DEG = 180 / Math.PI;
export const DEG2RAD = 1 / RAD2DEG;

export class Vector2 implements IVector2 {
	x!: number;
	y!: number;

	/**
	 * Creates a new Vector2 instance with the components set to those of arguments, respectively.
	 */
	constructor(x: number, y: number);
	/**
	 * Creates a new Vector2 instance with the components of that instance equal to the corresponding components of the given Vector2 instance, respectively.
	 */
	constructor(vector: Vector2);
	/**
	 * Creates a new Vector2 instance with both components of that instance equal to 'xy'.
	 */
	constructor(xy: number);
	/**
	 * Creates a new Vector2 instance with both components of that instance equal to 0.
	 */
	constructor();
	constructor(...args: [] | [number] | [number, number] | [Vector2]) {
		// @ts-ignore: Idk how to tell the typescript compiler that there will be maximum of 2 arguments in 'args' thing. 
		this.set(...args);
	}

	/**
	 * @returns {number} the 'x' component of this Vector2 instance.
	 */
	get 0(): number {
		return this.x;
	}

	/**
	 * @returns {number} the 'y' component of this Vector2 instance.
	 */
	get 1(): number {
		return this.y;
	}

	/**
	 * @returns {string} the string representation of this Vector2 instance.
	 */
	toString(): string {
		return `[${this.x}, ${this.y}]`;
	}

	/**
	 * @returns {number} the largest of two components of this Vector2 instance.
	 */
	get max(): number {
		return Math.max(this.x, this.y);
	}

	/**
	 * @returns {number} the smallest of two components of this Vector2 instance.
	 */
	get min(): number {
		return Math.min(this.x, this.y);
	}

	/**
	 * The length of this Vector2 instance.
	 * If negative values or values less than zero provided, then the magnitude will be set to 0.
	 */
	get mag(): number {
		return Math.hypot(this.x, this.y);
	}

	set mag(value: number) {
		value <= 0 ? this.set() : this.normalize().mult(value);
	}

	/**
	 * The angle in radians of this Vector2 instance.
	 */
	get angle(): number {
		return Math.atan2(this.y, this.x);
	}

	set angle(value: number) {
		this.rotateTo(value);
	}

	/**
	 * Sets the both components of this Vector2 instance, respectively.
	 */
	set(x: number, y: number) : Vector2;
	/**
	 * Sets the both components of this Vector2 instance to 'xy'.
	 */
	set(xy: number) : Vector2;
	/**
	 * Sets the both components of this Vector2 instance to 0.
	 */
	set() : Vector2;
	/**
	 * Sets the components of this Vector2 instance to the corresponding components of the given Vector2 instance, respectively.
	 */
	set(vec: Vector2) : Vector2;
	/** whatever */
	set(...args: [] | [number] | [number, number] | [Vector2]) : Vector2 {
		switch(args.length as number) {
			case 0: 
				this.x = 0;
				this.y = 0;
				break;
			case 1: 
				if(typeof args[0] === 'number') {
					this.x = args[0];
					this.y = args[0];
				} else {
					this.x = (args[0] as Vector2).x;
					this.y = (args[0] as Vector2).y;
				}
				break;
			default:
				this.x = args[0] as number;
				this.y = args[1] as number;
				break;
		}
		return this;
	}

	/**
	 * Adds 'delta' to the both components of this Vector2 instance.
	 */
	add(delta: number): Vector2;
	/**
	 * Adds 'deltaX' and 'deltaY' to the components of this Vector2 instance, respectively.
	 */
	add(deltaX: number, deltaY: number): Vector2;
	/**
	 * Adds to the components of this Vector2 instance the corresponding components of the given Vector2 instance, respectively.
	 */
	add(vector: Vector2): Vector2;
	add(...args: [number] | [number, number] | [Vector2]): Vector2 {
		switch(args.length as number) {
			case 1: 
				if(typeof args[0] === 'number') {
					this.x += args[0];
					this.y += args[0];
				} else {
					this.x += (args[0] as Vector2).x;
					this.y += (args[0] as Vector2).y;
				}
				break;
			default:
				this.x += args[0] as number;
				this.y += args[1] as number;
				break;
		}
		return this;
	}

	/**
	 * Subtracts 'delta' from the both components of this Vector2 instance.
	 */
	sub(delta: number): Vector2;
	/**
	 * Subtracts 'deltaX' and 'deltaY' from the components of this Vector2 instance, respectively.
	 */
	sub(deltaX: number, deltaY: number): Vector2;
	/**
	 * Subtracts from the components of this Vector2 instance the corresponding components of the given Vector2 instance, respectively.
	 */
	sub(vector: Vector2): Vector2;
	sub(...args: [number] | [number, number] | [Vector2]): Vector2 {
		switch(args.length as number) {
			case 1: 
				if(typeof args[0] === 'number') {
					this.x -= args[0];
					this.y -= args[0];
				} else {
					this.x -= (args[0] as Vector2).x;
					this.y -= (args[0] as Vector2).y;
				}
				break;
			default:
				this.x -= args[0] as number;
				this.y -= args[1] as number;
				break;
		}
		return this;
	}

	/**
	 * Multiplies both components of this Vector2 instance by 'factor'.
	 */
	mult(factor: number): Vector2;
	/**
	 * Multiplies both components of this Vector2 instance by 'factorX' and 'factorY', respectively.
	 */
	mult(factorX: number, factorY: number): Vector2;
	/**
	 * Multiplies both components of this Vector2 instance by the corresponding components of the given Vector2 instance, respectively.
	 */
	mult(vector: Vector2): Vector2;
	mult(...args: [number] | [number, number] | [Vector2]): Vector2 {
		switch(args.length as number) {
			case 1: 
				if(typeof args[0] === 'number') {
					this.x *= args[0];
					this.y *= args[0];
				} else {
					this.x *= (args[0] as Vector2).x;
					this.y *= (args[0] as Vector2).y;
				}
				break;
			default:
				this.x *= args[0] as number;
				this.y *= args[1] as number;
				break;
		}
		return this;
	}

	/**
	 * Divides both components of this Vector2 instance by 'divisor'.
	 */
	div(divisor: number): Vector2;
	/**
	 * Divides both components of this Vector2 instance by 'divisorX' and 'divisorY', respectively.
	 */
	div(divisorX: number, divisorY: number): Vector2;
	/**
	 * Divides both components of this Vector2 instance by the corresponding components of the given Vector2 instance, respectively.
	 */
	div(vector: Vector2): Vector2;
	div(...args: [number] | [number, number] | [Vector2]): Vector2 {
		switch(args.length as number) {
			case 1: 
				if(typeof args[0] === 'number') {
					this.x /= args[0];
					this.y /= args[0];
				} else {
					this.x /= (args[0] as Vector2).x;
					this.y /= (args[0] as Vector2).y;
				}
				break;
			default:
				this.x /= args[0] as number;
				this.y /= args[1] as number;
				break;
		}
		return this;
	}

	/**
	 * Scales this Vector2 instance so that its magnitude will be 'value'.
	 */
	setMag(value: number): Vector2;
	/**
	 * Scales this Vector2 instance so that its magnitude will be the same as the magnitude of the given Vector2 instance.
	 */
	setMag(vector: Vector2): Vector2;
	setMag(arg: number | Vector2): Vector2 {
		this.mag = typeof arg === 'number' ? arg : (arg as Vector2).mag;
		return this;
	}

	/**
	 * Rotates this Vector2 instance so that its angle will be 'radians'.
	 */
	rotateTo(radians: number): Vector2;
	/**
	 * Rotates this Vector2 instance so that its angle will be the same as a the angle of the given Vector2 instance.
	 */
	rotateTo(vector: Vector2): Vector2;
	rotateTo(arg: number | Vector2): Vector2 {
		arg = typeof arg === 'number' ? arg : (arg as Vector2).angle;
		return this.set(
			Math.cos(arg) * this.mag, 
			Math.sin(arg) * this.mag
		);
	}

	/**
	 * Rotates this Vector2 instance by 'radians'.
	 */
	rotateBy(radians: number): Vector2;
	/**
	 * Rotates this Vector2 instance by the angle of a given Vector2 instance.
	 */
	rotateBy(vector: Vector2): Vector2;
	rotateBy(arg: number | Vector2): Vector2 {
		arg = typeof arg === 'number' ? arg : (arg as Vector2).angle;
		return this.set(
			this.x * Math.cos(arg) - this.y * Math.sin(arg), 
			this.x * Math.sin(arg) + this.y * Math.cos(arg)
		);
	}

	/**
	 * Scales this Vector2 instance so that its magnitude will be 1.
	 * If the magnitude of this Vector2 instance is 0, than magnitude will not be changed.
	 */
	normalize(): Vector2 {
		return this.mag > 0 ? this.div(this.mag) : this;
	}

	/**
	 * Inverts both components of this Vector2 instance (changes the sign).
	 */
	negate(): Vector2 {
		return this.set(-this.x, -this.y);
	}

	/**
	 * Check if both components of this Vector2 instance are equal to the corresponding components of the given Vector2 instance, respectively.
	 */
	isEquals(vector: Vector2): boolean {
		return this.x === vector.x && this.y === vector.y;
	}

	/**
	 * @returns {Vector2} a new Vector2 instance created with both components of that instance equal to the corresponding components of this Vector2 instance, respectively. 
	 */
	copy(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 0 and ends at 1.
	 */
	clamp(): Vector2;
	/**
	 * Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 0 and ends at 'upperBound'.
	 */
	clamp(upperBound: number): Vector2;
	/**
	 * Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 'lowerBound' and ends at 'upperBound'.
	 */
	clamp(lowerBound: number, upperBound: number): Vector2;
	/**
	 * Defines two ranges from which each components of this Vector2 instance can take a value, and tries to fit those components into the defined ranges, respectively: range 1 from 'lowerBoundForX' to 'upperBoundForX', range 2 from 'lowerBoundForY' to 'upperBoundForY'.
	 */
	clamp(lowerBoundForX: number, upperBoundForX: number, lowerBoundForY: number, upperBoundForY: number): Vector2;
	clamp(...args: [] | [number] | [number, number] | [number, number, number, number]): Vector2 {
		/* istanbul ignore next */ // idk why it's not showing up as completed branch under test coverage.
		switch(args.length as number) {
			case 0:
				this.set(
					Math.min(Math.max(this.x, 0), 1), 
					Math.min(Math.max(this.y, 0), 1)
				);
				break;
			case 1:
				args[0] as number >= 0 
					? this.set(
						Math.min(Math.max(this.x, 0), args[0] as number), 
						Math.min(Math.max(this.y, 0), args[0] as number) 
					) 
					: this.set(
						Math.max(Math.min(this.x, 0), args[0] as number), 
						Math.max(Math.min(this.y, 0), args[0] as number) 
					);
				break;
			case 3:
			case 2:
				args[1] as number >= (args[0] as number)
					? this.set(
						Math.min(Math.max(this.x, args[0] as number), args[1] as number), 
						Math.min(Math.max(this.y, args[0] as number), args[1] as number) 
					)
					: this.set(
						Math.min(Math.max(this.x, args[1] as number), args[0] as number), 
						Math.min(Math.max(this.y, args[1] as number), args[0] as number) 
					);
				break;
			default:
				this.set(
					args[1] as number >= (args[0] as number)
						? Math.min(Math.max(this.x, args[0] as number), args[1] as number)
						: Math.min(Math.max(this.x, args[1] as number), args[0] as number), 
					args[3] as number >= (args[2] as number) 
						? Math.min(Math.max(this.y, args[2] as number), args[3] as number) 
						: Math.min(Math.max(this.y, args[3] as number), args[2] as number) 
				);
				break;
		}
		return this;
	}

	/**
	 * Rounds both components of this Vector2 instance to the nearest integer.
	 */
	round(): Vector2 {
		return this.set(
			Math.round(this.x),
			Math.round(this.y)
		);
	}

	/**
	 * Rounds both components of this Vector2 instance to the nearest larger integer.
	 */
	ceil(): Vector2 {
		return this.set(
			Math.ceil(this.x),
			Math.ceil(this.y)
		);
	}

	/**
	 * Rounds both components of this Vector2 instance to the nearest smaller integer.
	 */
	floor(): Vector2 {
		return this.set(
			Math.floor(this.x),
			Math.floor(this.y)
		);
	}

	/**
	 * Divides both components of this Vector2 instance by 'divisor' and sets each component equal to a remainder of that division.
	 */
	mod(divisor: number) : Vector2;
	/**
	 * Divides both components of this Vector2 instance by 'divisorX' and 'divisorY', respectively, and sets each component equal to a corressponding remainder of that division.
	 */
	mod(divisorX: number, divisorY: number): Vector2;
	mod(...args: [number] | [number, number]): Vector2 {
		if(args.length === 1) {
			this.set(
				this.x % args[0],
				this.y % args[0]
			);
		} else {
			this.set(
				this.x % args[0],
				this.y % args[1]
			);
		}
		return this;
	}

	/**
	 * Linearly interpolates between the two given Vector2 instances by 't'. 
	 */
	lerp(vector1: Vector2, vector2: Vector2, t: number): Vector2 {
		return Vector2.lerp(this, vector1, vector2, t);
	}

	/**
	 * Adds the given Vector2 instances together and returns new Vector2 instance containing the result.
	 */
	static add(...vectors: [Vector2, Vector2, ...Vector2[]]): Vector2 {
		return vectors.slice(1).reduce((accum, vector) => accum.add(vector), vectors[0].copy());
	}
	
	/**
	 * Sequentially subtracts all the given Vector2 instances and returns new Vector2 instance containing the result.
	 */
	static sub(...vectors: [Vector2, Vector2, ...Vector2[]]): Vector2 {
		return vectors.slice(1).reduce((accum, vector) => accum.sub(vector), vectors[0].copy());
	}

	/**
	 * Multiplies the given Vector2 instances together and returns new Vector2 instance containing the result.
	 */
	static mult(...vectors: [Vector2, Vector2, ...Vector2[]]): Vector2 {
		return vectors.slice(1).reduce((accum, vector) => accum.mult(vector), vectors[0].copy());
	}

	/**
	 * Sequentially divides the given Vector2 instances and returns new Vector2 instance containing the result.
	 */
	static div(...vectors: [Vector2, Vector2, ...Vector2[]]): Vector2 {
		return vectors.slice(1).reduce((accum, vector) => accum.div(vector), vectors[0].copy());
	}

	/**
	 * @returns {number} the distance between the two given Vector2 instances.
	 */
	static dist(vector1: Vector2, vector2: Vector2): number {
		return Math.hypot(vector2.x - vector1.x, vector2.y - vector1.y);
	}

	/**
	 * @returns {Vector2} a new Vector2 instance with angle equal to 'angle' (in radians) and, if specified, magnitude 'magnitude' - otherwise sets the magnitude equal to 1. 
	 */
	static fromAngle(angle: number, magnitude = 1): Vector2 {
		return new Vector2(
			Math.cos(angle) * magnitude,
			Math.sin(angle) * magnitude
		);
	}

	/**
	 * @returns {number} an unsigned angle (from 0 to PI radians) between the two given Vector2 instances.
	 */
	static angleBetween(vector1: Vector2, vector2: Vector2): number {
		return Math.acos((vector1.x * vector2.x + vector1.y * vector2.y) / (Math.sqrt(Math.pow(vector1.x, 2) + Math.pow(vector1.y, 2)) * Math.sqrt(Math.pow(vector2.x, 2) + Math.pow(vector2.y, 2))));
	}

	/**
	 * @returns {number} a signed angle (from -PI to PI radians) between the two given Vector2 instances. 
	 * The resulting angle is the angle that, if applied as a rotation to the vector 'vector1', will result in the 'vector2'.
	 */
	static angleBetweenSigned(vector1: Vector2, vector2: Vector2): number {
		const tempMess = vector2.angle - vector1.angle;
		return Math.abs(tempMess) > Math.PI ? (Math.PI * 2 - Math.abs(tempMess)) * -Math.sign(tempMess) : tempMess;
	}

	/**
	 * @returns {number} the dot product of the two given Vector2 instances.
	 */
	static dot(vector1: Vector2, vector2: Vector2): number {
		return vector1.mag * vector2.mag * Math.cos(Vector2.angleBetween(vector1, vector2));
	}

	/**
	 * Linearly interpolates between the two given Vector2 instances by 't'. 
	 * Result both is stored in the provied by user 'vectorOut' Vector2 instance and returned by the function. 
	 */
	static lerp(vectorOut: Vector2, vector1: Vector2, vector2: Vector2, t: number): Vector2 {
		return vectorOut.set(
			vector1.x + (vector2.x - vector1.x) * t,
			vector1.y + (vector2.y - vector1.y) * t
		);
	}

	/**
	 * @returns {Vector2} a new Vector2 instance with both its components set to 0.
	 */
	static zero(): Vector2 {
		return new Vector2();
	}

	/**
	 * @returns {Vector2} a new Vector2 instance with a random angle and, if specified, magnitude 'magnitude' - otherwise sets the magnitude equal to 1. 
	 */
	static random(magnitude = 1): Vector2 {
		return Vector2.fromAngle(Math.random() * Math.PI * 2, magnitude);
	}
}