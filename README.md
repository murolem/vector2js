<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Usage](#usage)
- [*TODO*](#todo)
- [Classes](#classes)
  - [Class: Vector2](#class-vector2)
    - [Hierarchy](#hierarchy)
    - [Implements](#implements)
    - [Table of contents](#table-of-contents)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Accessors](#accessors)
    - [Methods](#methods)
- [@aliser/vector2](#aliservector2)
  - [Table of contents](#table-of-contents-1)
    - [Classes](#classes-1)
    - [Variables](#variables)
  - [Variables](#variables-1)
    - [DEG2RAD](#deg2rad)
    - [RAD2DEG](#rad2deg)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@aliser/vector2 / [Exports](#modulesmd)


<a name="readme_headermd"></a>

[![Build Status](https://www.travis-ci.com/Eleseer/vector2js.svg?branch=main)](https://www.travis-ci.com/Eleseer/vector2js)
[![Coverage Status](https://coveralls.io/repos/github/Eleseer/vector2js/badge.svg?branch=main)](https://coveralls.io/github/Eleseer/vector2js?branch=main)

# Usage
Install with npm.
```shell
npm install @aliser/vector2
```
Import as a module.
```javascript
import { Vector2, RAD2DEG, DEG2RAD } from '@aliser/vector2';
```
**Enjoy!**

Below you can find the docs for all of this.

*Note: the static and the instance methods are mixed. Sorry for that.* 

# *TODO*
- [ ] custom interpolation functions for the `static lerp` - slide with ease!
- [ ] maybe some static damping function - it'll make the target vector experience some kind of repulsion (the magnitude of which is controller by some specified function) on approaching the end point.
- [ ] getters for directions - up, down, right, west, east, forward, backward, sideways, the 5- and 11- dimensions and other.
- [ ] implement the stuff that other libs like this one are providing: reflect, normal, moveTowards.
# Classes


<a name="classesvector2md"></a>

[@aliser/vector2](#readmemd) / [Exports](#modulesmd) / Vector2

## Class: Vector2

### Hierarchy

* **Vector2**

### Implements

* *IVector2*

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [x](#x)
- [y](#y)

#### Accessors

- [0](#0)
- [1](#1)
- [angle](#angle)
- [mag](#mag)
- [max](#max)
- [min](#min)
- [sqrMag](#sqrmag)
- [u](#u)
- [v](#v)

#### Methods

- [add](#add)
- [ceil](#ceil)
- [clamp](#clamp)
- [copy](#copy)
- [div](#div)
- [floor](#floor)
- [isEquals](#isequals)
- [lerp](#lerp)
- [mod](#mod)
- [mult](#mult)
- [negate](#negate)
- [normalize](#normalize)
- [rotateBy](#rotateby)
- [rotateTo](#rotateto)
- [round](#round)
- [set](#set)
- [setMag](#setmag)
- [sub](#sub)
- [add](#add)
- [angleBetween](#anglebetween)
- [angleBetweenSigned](#anglebetweensigned)
- [dist](#dist)
- [div](#div)
- [dot](#dot)
- [fromAngle](#fromangle)
- [lerp](#lerp)
- [mult](#mult)
- [random](#random)
- [randomWithLength](#randomwithlength)
- [sub](#sub)
- [zero](#zero)

### Constructors

#### constructor

\+ **new Vector2**(`x?`: *number*, `y?`: *number*): [*Vector2*](#classesvector2md)

Creates an instance.

##### Parameters:

Name | Type |
------ | ------ |
`x?` | *number* |
`y?` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

\+ **new Vector2**(`xy?`: *number*): [*Vector2*](#classesvector2md)

Creates an instance, where 'x' and 'y' are both equal to 'xy'.

##### Parameters:

Name | Type |
------ | ------ |
`xy?` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

\+ **new Vector2**(): [*Vector2*](#classesvector2md)

Creates an instance, where 'x' and 'y' are both equal to 0.

**Returns:** [*Vector2*](#classesvector2md)

\+ **new Vector2**(`vec?`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Creates an instance, where 'x' and 'y' are equal to 'x' and 'y' of 'vec', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec?` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

### Properties

#### x

• **x**: *number*

___

#### y

• **y**: *number*

### Accessors

#### 0

• **0**(): *number*

**Returns:** *number*

alias for 'x'.

• **0**(`value`: *number*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

alias for 'x'.

___

#### 1

• **1**(): *number*

**Returns:** *number*

alias for 'y'.

• **1**(`value`: *number*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

alias for 'y'.

___

#### angle

• **angle**(): *number*

The signed angle (from -PI to PI radians).

**Returns:** *number*

• **angle**(`value`: *number*): *void*

The signed angle (from -PI to PI radians).

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

___

#### mag

• **mag**(): *number*

The length.

Note, when setting 'mag' to negative value, both 'x' and 'y' will be set to 0, and the magnitude will be 0.

**Returns:** *number*

• **mag**(`value`: *number*): *void*

The length.

Note, when setting 'mag' to negative value, both 'x' and 'y' will be set to 0, and the magnitude will be 0.

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

___

#### max

• **max**(): *number*

**Returns:** *number*

the largest of 'x' and 'y'.

___

#### min

• **min**(): *number*

**Returns:** *number*

the smallest of 'x' and 'y'.

___

#### sqrMag

• **sqrMag**(): *number*

**Returns:** *number*

the length, squared.

___

#### u

• **u**(): *number*

**Returns:** *number*

alias for 'x'.

• **u**(`value`: *number*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

alias for 'x'.

___

#### v

• **v**(): *number*

**Returns:** *number*

alias for 'y'.

• **v**(`value`: *number*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

alias for 'y'.

### Methods

#### add

▸ **add**(`deltaX`: *number*): [*Vector2*](#classesvector2md)

Adds 'deltaX' to both 'x' and 'y'.

##### Parameters:

Name | Type |
------ | ------ |
`deltaX` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **add**(`deltaX`: *number*, `deltaY`: *number*): [*Vector2*](#classesvector2md)

Adds 'deltaX' and 'deltaY' to 'x' and 'y', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`deltaX` | *number* |
`deltaY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **add**(`vec`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Adds 'x' and 'y' of 'vec' to 'x' and 'y', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### ceil

▸ **ceil**(): [*Vector2*](#classesvector2md)

Does the rounding to the nearest larger integer.

**Returns:** [*Vector2*](#classesvector2md)

___

#### clamp

▸ **clamp**(): [*Vector2*](#classesvector2md)

Restricts 'x' and 'y' from going below 0 or above 1.

**Returns:** [*Vector2*](#classesvector2md)

▸ **clamp**(`upperBound`: *number*): [*Vector2*](#classesvector2md)

Restricts 'x' and 'y' from going below 0 or above 'upperBound'.

##### Parameters:

Name | Type |
------ | ------ |
`upperBound` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **clamp**(`lowerBound`: *number*, `upperBound`: *number*): [*Vector2*](#classesvector2md)

Restricts 'x' and 'y' from going below 'lowerBound' or above 'upperBound'.

##### Parameters:

Name | Type |
------ | ------ |
`lowerBound` | *number* |
`upperBound` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **clamp**(`lowerBoundX`: *number*, `upperBoundX`: *number*, `lowerBoundY`: *number*, `upperBoundY`: *number*): [*Vector2*](#classesvector2md)

Restricts 'x' from going below 'lowerBoundX' or above 'upperBoundX', and for 'y' from going below 'lowerBoundY' or above 'upperBoundY'.

##### Parameters:

Name | Type |
------ | ------ |
`lowerBoundX` | *number* |
`upperBoundX` | *number* |
`lowerBoundY` | *number* |
`upperBoundY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

___

#### copy

▸ **copy**(): [*Vector2*](#classesvector2md)

**Returns:** [*Vector2*](#classesvector2md)

a copy of this instance.

___

#### div

▸ **div**(`divisor`: *number*): [*Vector2*](#classesvector2md)

Divides both 'x' and 'y' by 'divisor'.

##### Parameters:

Name | Type |
------ | ------ |
`divisor` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **div**(`divisorX`: *number*, `divisorY`: *number*): [*Vector2*](#classesvector2md)

Divides 'x' and 'y' by 'divisorX' and 'divisorY', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`divisorX` | *number* |
`divisorY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **div**(`vec`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Divides 'x' and 'y' by 'x' and 'y' of vec, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### floor

▸ **floor**(): [*Vector2*](#classesvector2md)

Does the rounding to the nearest smaller integer.

**Returns:** [*Vector2*](#classesvector2md)

___

#### isEquals

▸ **isEquals**(`vec`: [*Vector2*](#classesvector2md)): *boolean*

Checks if 'x' and 'y' are strictly equal to 'x' and 'y', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** *boolean*

___

#### lerp

▸ **lerp**(`vec1`: [*Vector2*](#classesvector2md), `vec2`: [*Vector2*](#classesvector2md), `t`: *number*): [*Vector2*](#classesvector2md)

Linearly interpolates between 'vec1' and 'vec2' by 't', setting this instance to result.

##### Parameters:

Name | Type |
------ | ------ |
`vec1` | [*Vector2*](#classesvector2md) |
`vec2` | [*Vector2*](#classesvector2md) |
`t` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

___

#### mod

▸ **mod**(`divisor`: *number*): [*Vector2*](#classesvector2md)

Divides both 'x' and 'y' by 'divisor' and sets them to the remainder of that division, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`divisor` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **mod**(`divisorX`: *number*, `divisorY`: *number*): [*Vector2*](#classesvector2md)

Divides 'x' and 'y' by 'divisorX' and 'divisorY', respectively, and sets them to the remainder of that division, also respectively.

##### Parameters:

Name | Type |
------ | ------ |
`divisorX` | *number* |
`divisorY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

___

#### mult

▸ **mult**(`multiplier`: *number*): [*Vector2*](#classesvector2md)

Multiplies both 'x' and 'y' by 'multiplier'.

##### Parameters:

Name | Type |
------ | ------ |
`multiplier` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **mult**(`multiplierX`: *number*, `multiplierY`: *number*): [*Vector2*](#classesvector2md)

Multiplies 'x' and 'y' by 'multiplierX' and 'multiplierY', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`multiplierX` | *number* |
`multiplierY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **mult**(`vec`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Multiplies 'x' and 'y' by 'x' and 'y' of 'vec', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### negate

▸ **negate**(): [*Vector2*](#classesvector2md)

Inverts both 'x' and 'y' (makes them -'x' and -'y').

**Returns:** [*Vector2*](#classesvector2md)

___

#### normalize

▸ **normalize**(): [*Vector2*](#classesvector2md)

Mangles the length of this instance until it will be 1.

Note, if the length of this instance is 0, than it will not be changed.

**Returns:** [*Vector2*](#classesvector2md)

___

#### rotateBy

▸ **rotateBy**(`angleInRadiansDelta`: *number*): [*Vector2*](#classesvector2md)

Rotates this instance by 'angleInRadiansDelta' radians.

##### Parameters:

Name | Type |
------ | ------ |
`angleInRadiansDelta` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **rotateBy**(`vec`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Rotates this instance by the signed angle of 'vec'.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### rotateTo

▸ **rotateTo**(`angleInRadians`: *number*): [*Vector2*](#classesvector2md)

Rotates this instance to 'angleInRadians' radians.

##### Parameters:

Name | Type |
------ | ------ |
`angleInRadians` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **rotateTo**(`vec`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Rotates this instance to the angle of 'vec'.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### round

▸ **round**(): [*Vector2*](#classesvector2md)

Does the rounding to the nearest integer.

**Returns:** [*Vector2*](#classesvector2md)

___

#### set

▸ **set**(`x?`: *number*, `y?`: *number*): [*Vector2*](#classesvector2md)

Sets 'x' and 'y', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`x?` | *number* |
`y?` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **set**(`xy?`: *number*): [*Vector2*](#classesvector2md)

Sets both 'x' and 'y' to 'xy'.

##### Parameters:

Name | Type |
------ | ------ |
`xy?` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **set**(): [*Vector2*](#classesvector2md)

Sets both 'x' and 'y' to 0.

**Returns:** [*Vector2*](#classesvector2md)

▸ **set**(`vec?`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Sets 'x' and 'y' to 'x' and 'y' of 'vec', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec?` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### setMag

▸ **setMag**(`value`: *number*): [*Vector2*](#classesvector2md)

Function alias of 'mag'.

Sets the length.

Note, when setting 'value' is negative, both 'x' and 'y' will be set to 0, and the magnitude will be 0.

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **setMag**(`vec`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Sets the length to the length of `vec`.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### sub

▸ **sub**(`delta`: *number*): [*Vector2*](#classesvector2md)

Subtracts 'delta' from both 'x' and 'y'.

##### Parameters:

Name | Type |
------ | ------ |
`delta` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **sub**(`deltaX`: *number*, `deltaY`: *number*): [*Vector2*](#classesvector2md)

Subtracts 'deltaX' and 'deltaY' from 'x' and 'y', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`deltaX` | *number* |
`deltaY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **sub**(`vec`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Subtracts 'x' and 'y' of 'vec' from 'x' and 'y', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### add

▸ `Static`**add**(...`vecs`: [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]]): [*Vector2*](#classesvector2md)

Adds 'vecs' together.

##### Parameters:

Name | Type |
------ | ------ |
`...vecs` | [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]] |

**Returns:** [*Vector2*](#classesvector2md)

___

#### angleBetween

▸ `Static`**angleBetween**(`vec1`: [*Vector2*](#classesvector2md), `vec2`: [*Vector2*](#classesvector2md)): *number*

##### Parameters:

Name | Type |
------ | ------ |
`vec1` | [*Vector2*](#classesvector2md) |
`vec2` | [*Vector2*](#classesvector2md) |

**Returns:** *number*

an unsigned angle (from 0 to PI radians) between 'vec1' and 'vec2'.

___

#### angleBetweenSigned

▸ `Static`**angleBetweenSigned**(`vec1`: [*Vector2*](#classesvector2md), `vec2`: [*Vector2*](#classesvector2md)): *number*

##### Parameters:

Name | Type |
------ | ------ |
`vec1` | [*Vector2*](#classesvector2md) |
`vec2` | [*Vector2*](#classesvector2md) |

**Returns:** *number*

the smallest signed angle (from -PI to PI radians) between 'vec1' and 'vec2'.

Note, that the resulting angle is the angle that, if applied as a rotation to 'vec1', will result in 'vec2'.

___

#### dist

▸ `Static`**dist**(`vec1`: [*Vector2*](#classesvector2md), `vec2`: [*Vector2*](#classesvector2md)): *number*

##### Parameters:

Name | Type |
------ | ------ |
`vec1` | [*Vector2*](#classesvector2md) |
`vec2` | [*Vector2*](#classesvector2md) |

**Returns:** *number*

the distance between 'vec1' and 'vec2'.

___

#### div

▸ `Static`**div**(...`vectors`: [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]]): [*Vector2*](#classesvector2md)

Sequentially divides 'vecs', one by one.

##### Parameters:

Name | Type |
------ | ------ |
`...vectors` | [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]] |

**Returns:** [*Vector2*](#classesvector2md)

___

#### dot

▸ `Static`**dot**(`vec1`: [*Vector2*](#classesvector2md), `vec2`: [*Vector2*](#classesvector2md)): *number*

##### Parameters:

Name | Type |
------ | ------ |
`vec1` | [*Vector2*](#classesvector2md) |
`vec2` | [*Vector2*](#classesvector2md) |

**Returns:** *number*

the dot product of 'vec1' and 'vec2'.

___

#### fromAngle

▸ `Static`**fromAngle**(`angleOfRadians`: *number*, `length?`: *number*): [*Vector2*](#classesvector2md)

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`angleOfRadians` | *number* | - |
`length` | *number* | 1 |

**Returns:** [*Vector2*](#classesvector2md)

a new instance with angle 'angleOfRadians' radians and length 'length'.

___

#### lerp

▸ `Static`**lerp**(`vecOut`: [*Vector2*](#classesvector2md), `vec1`: [*Vector2*](#classesvector2md), `vec2`: [*Vector2*](#classesvector2md), `t`: *number*): [*Vector2*](#classesvector2md)

Linearly interpolates between 'vec1' and 'vec2' by 't', setting 'vecOut' to result.

##### Parameters:

Name | Type |
------ | ------ |
`vecOut` | [*Vector2*](#classesvector2md) |
`vec1` | [*Vector2*](#classesvector2md) |
`vec2` | [*Vector2*](#classesvector2md) |
`t` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

'vecOut'.

___

#### mult

▸ `Static`**mult**(...`vecs`: [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]]): [*Vector2*](#classesvector2md)

Multiplies 'vecs' together.

##### Parameters:

Name | Type |
------ | ------ |
`...vecs` | [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]] |

**Returns:** [*Vector2*](#classesvector2md)

___

#### random

▸ `Static`**random**(`multiplier?`: *number*): [*Vector2*](#classesvector2md)

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`multiplier` | *number* | 1 |

**Returns:** [*Vector2*](#classesvector2md)

a new instance with 'x' and 'y' individually set to some random value from -1 to below 1, multiplied by 'multiplier'.

___

#### randomWithLength

▸ `Static`**randomWithLength**(`length?`: *number*): [*Vector2*](#classesvector2md)

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`length` | *number* | 1 |

**Returns:** [*Vector2*](#classesvector2md)

a new instance with 'x' and 'y' individually set to some random value in such a way that the length of the new instance will be 'length'.

___

#### sub

▸ `Static`**sub**(...`vecs`: [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]]): [*Vector2*](#classesvector2md)

Sequentially subtracts 'vecs', one by one.

##### Parameters:

Name | Type |
------ | ------ |
`...vecs` | [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]] |

**Returns:** [*Vector2*](#classesvector2md)

___

#### zero

▸ `Static`**zero**(): [*Vector2*](#classesvector2md)

**Returns:** [*Vector2*](#classesvector2md)

a new instance with both 'x' and 'y' set to 0.


<a name="modulesmd"></a>

[@aliser/vector2](#readmemd) / Exports

# @aliser/vector2

## Table of contents

### Classes

- [Vector2](#classesvector2md)

### Variables

- [DEG2RAD](#deg2rad)
- [RAD2DEG](#rad2deg)

## Variables

### DEG2RAD

• `Const` **DEG2RAD**: *number*

Multiply your degrees by this to convert them to radians.

___

### RAD2DEG

• `Const` **RAD2DEG**: *number*

Multiply your radians by this to convert them to degrees.
