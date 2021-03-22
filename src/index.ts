interface IVector2 {
	x: number,
	y: number,
	0: number,
	1: number,
	u: number,
	v: number,

	readonly max: number;
	readonly min: number;
	readonly sqrMag: number;

	mag: number;
	angle: number;

	set(arg1?: number | Vector2, arg2?: number) : Vector2,
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

/**
 * Multiply your radians by this to convert them to degrees.
 */
export const RAD2DEG = 180 / Math.PI;
/**
 * Multiply your degrees by this to convert them to radians.
 */
export const DEG2RAD = 1 / RAD2DEG;

export class Vector2 implements IVector2 {
	x!: number;
	y!: number;

	/**
	 * Creates an instance.
	 */
	constructor(x?: number, y?: number);
	/**
	 * Creates an instance, where 'x' and 'y' are both equal to 'xy'.
	 */
	constructor(xy?: number);
	/**
	 * Creates an instance, where 'x' and 'y' are both equal to 0.
	 */
	constructor();
	/**
	 * Creates an instance, where 'x' and 'y' are equal to 'x' and 'y' of 'vec', respectively.
	 */
	constructor(vec?: Vector2);
	constructor(...args: any[]) {
		this.set(...args);
	}

	/**
	 * @returns {number} alias for 'x'.
	 */
	get 0(): number {
		return this.x;
	}
	set 0(value: number) {
		this.x = value;
	}

	/**
	 * @returns {number} alias for 'y'.
	 */
	get 1(): number {
		return this.y;
	}
	set 1(value: number) {
		this.y = value;
	}

	/**
	 * @returns {number} alias for 'x'.
	 */
	get u(): number {
		return this.x;
	}
	set u(value: number) {
		this.x = value;
	}

	/**
	 * @returns {number} alias for 'y'.
	 */
	get v(): number {
		return this.y;
	}
	set v(value: number) {
		this.y = value;
	}

	/**
	 * @returns {number} the largest of 'x' and 'y'.
	 */
	get max(): number {
		return Math.max(this.x, this.y);
	}

	/**
	 * @returns {number} the smallest of 'x' and 'y'.
	 */
	get min(): number {
		return Math.min(this.x, this.y);
	}

	/**
	 * @returns {number} the length, squared.
	 */
	get sqrMag(): number {
		return Math.pow(this.x, 2) + Math.pow(this.y, 2);
	}

	/**
	 * The length.
	 * 
	 * Note, when setting 'mag' to negative value, both 'x' and 'y' will be set to 0, and the magnitude will be 0.
	 */
	get mag(): number {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}

	set mag(value: number) {
		value <= 0 ? this.set() : this.normalize().mult(value);
	}

	/**
	 * The signed angle (from -PI to PI radians).
	 */
	get angle(): number {
		return Math.atan2(this.y, this.x);
	}

	set angle(value: number) {
		this.rotateTo(value);
	}

	/**
	 * Sets 'x' and 'y', respectively.
	 */
	set(x?: number, y?: number): Vector2;
	/**
	 * Sets both 'x' and 'y' to 'xy'.
	 */
	set(xy?: number): Vector2;
	/**
	 * Sets both 'x' and 'y' to 0.
	 */
	set(): Vector2;
	/**
	 * Sets 'x' and 'y' to 'x' and 'y' of 'vec', respectively.
	 */
	set(vec?: Vector2): Vector2;
	set(arg1?: number | Vector2, arg2?: number): Vector2 {
		if(arg1 === undefined) {
			this.x = this.y = 0;
		} else if(typeof arg1 === 'number') {
			if(arg2 === undefined) {
				this.x = this.y = arg1;
			} else {
				this.x = arg1;
				this.y = arg2;
			}	
		} else {
			this.x = arg1.x;
			this.y = arg1.y;
		}
		return this;
	}

	/**
	 * Adds 'deltaX' to both 'x' and 'y'.
	 */
	add(deltaX: number): Vector2;
	/**
	 * Adds 'deltaX' and 'deltaY' to 'x' and 'y', respectively.
	 */
	add(deltaX: number, deltaY: number): Vector2;
	/**
	 * Adds 'x' and 'y' of 'vec' to 'x' and 'y', respectively.
	 */
	add(vec: Vector2): Vector2;
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
	 * Subtracts 'delta' from both 'x' and 'y'.
	 */
	sub(delta: number): Vector2;
	/**
	 * Subtracts 'deltaX' and 'deltaY' from 'x' and 'y', respectively.
	 */
	sub(deltaX: number, deltaY: number): Vector2;
	/**
	 * Subtracts 'x' and 'y' of 'vec' from 'x' and 'y', respectively.
	 */
	sub(vec: Vector2): Vector2;
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
	 * Multiplies both 'x' and 'y' by 'multiplier'.
	 */
	mult(multiplier: number): Vector2;
	/**
	 * Multiplies 'x' and 'y' by 'multiplierX' and 'multiplierY', respectively.
	 */
	mult(multiplierX: number, multiplierY: number): Vector2;
	/**
	 * Multiplies 'x' and 'y' by 'x' and 'y' of 'vec', respectively.
	 */
	mult(vec: Vector2): Vector2;
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
	 * Divides both 'x' and 'y' by 'divisor'.
	 */
	div(divisor: number): Vector2;
	/**
	 * Divides 'x' and 'y' by 'divisorX' and 'divisorY', respectively.
	 */
	div(divisorX: number, divisorY: number): Vector2;
	/**
	 * Divides 'x' and 'y' by 'x' and 'y' of vec, respectively.
	 */
	div(vec: Vector2): Vector2;
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
	 * Function alias of 'mag'.
	 * 
	 * Sets the length.
	 * 
	 * Note, when setting 'value' is negative, both 'x' and 'y' will be set to 0, and the magnitude will be 0.
	 */
	setMag(value: number): Vector2;
	/**
	 * Sets the length to the length of `vec`.
	 */
	setMag(vec: Vector2): Vector2;
	setMag(arg: number | Vector2): Vector2 {
		this.mag = typeof arg === 'number' ? arg : (arg as Vector2).mag;
		return this;
	}

	/**
	 * Rotates this instance to 'angleInRadians' radians.
	 */
	rotateTo(angleInRadians: number): Vector2;
	/**
	 * Rotates this instance to the angle of 'vec'.
	 */
	rotateTo(vec: Vector2): Vector2;
	rotateTo(arg: number | Vector2): Vector2 {
		arg = typeof arg === 'number' ? arg : (arg as Vector2).angle;
		return this.set(
			Math.cos(arg) * this.mag, 
			Math.sin(arg) * this.mag
		);
	}

	/**
	 * Rotates this instance by 'angleInRadiansDelta' radians.
	 */
	rotateBy(angleInRadiansDelta: number): Vector2;
	/**
	 * Rotates this instance by the signed angle of 'vec'.
	 */
	rotateBy(vec: Vector2): Vector2;
	rotateBy(arg: number | Vector2): Vector2 {
		arg = typeof arg === 'number' ? arg : (arg as Vector2).angle;
		return this.set(
			this.x * Math.cos(arg) - this.y * Math.sin(arg), 
			this.x * Math.sin(arg) + this.y * Math.cos(arg)
		);
	}

	/**
	 * Mangles the length of this instance until it will be 1.
	 * 
	 * Note, if the length of this instance is 0, than it will not be changed.
	 */
	normalize(): Vector2 {
		return this.mag > 0 ? this.div(this.mag) : this;
	}

	/**
	 * Inverts both 'x' and 'y' (makes them -'x' and -'y').
	 */
	negate(): Vector2 {
		return this.set(-this.x, -this.y);
	}

	/**
	 * Checks if 'x' and 'y' are strictly equal to 'x' and 'y', respectively.
	 */
	isEquals(vec: Vector2): boolean {
		return this.x === vec.x && this.y === vec.y;
	}

	/**
	 * @returns {Vector2} a copy of this instance.
	 */
	copy(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Restricts 'x' and 'y' from going below 0 or above 1.
	 */
	clamp(): Vector2;
	/**
	 * Restricts 'x' and 'y' from going below 0 or above 'upperBound'.
	 */
	clamp(upperBound: number): Vector2;
	/**
	 * Restricts 'x' and 'y' from going below 'lowerBound' or above 'upperBound'.
	 */
	clamp(lowerBound: number, upperBound: number): Vector2;
	/**
	 * Restricts 'x' from going below 'lowerBoundX' or above 'upperBoundX', and for 'y' from going below 'lowerBoundY' or above 'upperBoundY'.
	 */
	clamp(lowerBoundX: number, upperBoundX: number, lowerBoundY: number, upperBoundY: number): Vector2;
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
	 * Does the rounding to the nearest integer.
	 */
	round(): Vector2 {
		return this.set(
			Math.round(this.x),
			Math.round(this.y)
		);
	}

	/**
	 * Does the rounding to the nearest larger integer.
	 */
	ceil(): Vector2 {
		return this.set(
			Math.ceil(this.x),
			Math.ceil(this.y)
		);
	}

	/**
	 * Does the rounding to the nearest smaller integer.
	 */
	floor(): Vector2 {
		return this.set(
			Math.floor(this.x),
			Math.floor(this.y)
		);
	}

	/**
	 * Divides both 'x' and 'y' by 'divisor' and sets them to the remainder of that division, respectively.
	 */
	mod(divisor: number) : Vector2;
	/**
	 * Divides 'x' and 'y' by 'divisorX' and 'divisorY', respectively, and sets them to the remainder of that division, also respectively.
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
	 * Linearly interpolates between 'vec1' and 'vec2' by 't', setting this instance to result. 
	 */
	lerp(vec1: Vector2, vec2: Vector2, t: number): Vector2 {
		return Vector2.lerp(this, vec1, vec2, t);
	}

	/**
	 * Adds 'vecs' together.
	 */
	static add(...vecs: [Vector2, Vector2, ...Vector2[]]): Vector2 {
		return vecs.slice(1).reduce((accum, vector) => accum.add(vector), vecs[0].copy());
	}
	
	/**
	 * Sequentially subtracts 'vecs', one by one.
	 */
	static sub(...vecs: [Vector2, Vector2, ...Vector2[]]): Vector2 {
		return vecs.slice(1).reduce((accum, vector) => accum.sub(vector), vecs[0].copy());
	}

	/**
	 * Multiplies 'vecs' together.
	 */
	static mult(...vecs: [Vector2, Vector2, ...Vector2[]]): Vector2 {
		return vecs.slice(1).reduce((accum, vector) => accum.mult(vector), vecs[0].copy());
	}

	/**
	 * Sequentially divides 'vecs', one by one.
	 */
	static div(...vectors: [Vector2, Vector2, ...Vector2[]]): Vector2 {
		return vectors.slice(1).reduce((accum, vector) => accum.div(vector), vectors[0].copy());
	}

	/**
	 * @returns {number} the distance between 'vec1' and 'vec2'.
	 */
	static dist(vec1: Vector2, vec2: Vector2): number {
		return Math.hypot(vec2.x - vec1.x, vec2.y - vec1.y);
	}

	/**
	 * @returns {Vector2} a new instance with angle 'angleOfRadians' radians and length 'length'.
	 */
	static fromAngle(angleOfRadians: number, length = 1): Vector2 {
		return length <= 0 
			? new Vector2()
			: new Vector2(
				Math.cos(angleOfRadians) * length,
				Math.sin(angleOfRadians) * length
			);
	}

	/**
	 * @returns {number} an unsigned angle (from 0 to PI radians) between 'vec1' and 'vec2'.
	 */
	static angleBetween(vec1: Vector2, vec2: Vector2): number {
		return Math.acos(
			(vec1.x * vec2.x + vec1.y * vec2.y) / (Math.sqrt(Math.pow(vec1.x, 2) 
			+ Math.pow(vec1.y, 2)) * Math.sqrt(Math.pow(vec2.x, 2) + Math.pow(vec2.y, 2))));
	}

	/**
	 * @returns {number} the smallest signed angle (from -PI to PI radians) between 'vec1' and 'vec2'.
	 * 
	 * Note, that the resulting angle is the angle that, if applied as a rotation to 'vec1', will result in 'vec2'.
	 */
	static angleBetweenSigned(vec1: Vector2, vec2: Vector2): number {
		const tempMess = vec2.angle - vec1.angle;
		return Math.abs(tempMess) > Math.PI ? (Math.PI * 2 - Math.abs(tempMess)) * -Math.sign(tempMess) : tempMess;
	}

	/**
	 * @returns {number} the dot product of 'vec1' and 'vec2'.
	 */
	static dot(vec1: Vector2, vec2: Vector2): number {
		return vec1.mag * vec2.mag * Math.cos(Vector2.angleBetween(vec1, vec2));
	}

	/**
	 * Linearly interpolates between 'vec1' and 'vec2' by 't', setting 'vecOut' to result. 
	 * 
	 * @returns {Vector2} 'vecOut'.
	 */
	static lerp(vecOut: Vector2, vec1: Vector2, vec2: Vector2, t: number): Vector2 {
		return vecOut.set(
			vec1.x + (vec2.x - vec1.x) * t,
			vec1.y + (vec2.y - vec1.y) * t
		);
	}

	/**
	 * @returns {Vector2} a new instance with both 'x' and 'y' set to 0.
	 */
	static zero(): Vector2 {
		return new Vector2();
	}

	/**
	 * @returns {Vector2} a new instance with 'x' and 'y' individually set to some random value in such a way that the length of the new instance will be 'length'.
	 */
	static randomWithLength(length = 1): Vector2 {
		return Vector2.fromAngle(Math.random() * Math.PI * 2, length);
	}

	/**
 	* @returns {Vector2} a new instance with 'x' and 'y' individually set to some random value from -1 to below 1, multiplied by 'multiplier'.
 	*/
	static random(multiplier = 1): Vector2 {
		return new Vector2(
			(Math.random() * 2 - 1) * multiplier,
			(Math.random() * 2 - 1) * multiplier
		);
	}
}