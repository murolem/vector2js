<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


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

# Usage
Install with npm.
```
npm i @aliser/vector2
```
Import as a module.
```javascript
import { Vector2, RAD2DEG, DEG2RAD } from '@aliser/vector2';
```
**Enjoy!**

Below you can find the docs for all of this.

*Note: the static and the instance methods are mixed. Sorry for that.* 
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
- [toString](#tostring)
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
- [sub](#sub)
- [zero](#zero)

### Constructors

#### constructor

\+ **new Vector2**(`x`: *number*, `y`: *number*): [*Vector2*](#classesvector2md)

Creates a new Vector2 instance with the components set to those of arguments, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`x` | *number* |
`y` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

\+ **new Vector2**(`vector`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Creates a new Vector2 instance with the components of that instance equal to the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

\+ **new Vector2**(`xy`: *number*): [*Vector2*](#classesvector2md)

Creates a new Vector2 instance with both components of that instance equal to 'xy'.

##### Parameters:

Name | Type |
------ | ------ |
`xy` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

\+ **new Vector2**(): [*Vector2*](#classesvector2md)

Creates a new Vector2 instance with both components of that instance equal to 0.

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

the 'x' component of this Vector2 instance.

___

#### 1

• **1**(): *number*

**Returns:** *number*

the 'y' component of this Vector2 instance.

___

#### angle

• **angle**(): *number*

The signed angle (from -PI to PI radians) of this Vector2 instance.

**Returns:** *number*

• **angle**(`value`: *number*): *void*

The signed angle (from -PI to PI radians) of this Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

___

#### mag

• **mag**(): *number*

The length of this Vector2 instance.
If negative values or values less than zero provided, then the magnitude will be set to 0.

**Returns:** *number*

• **mag**(`value`: *number*): *void*

The length of this Vector2 instance.
If negative values or values less than zero provided, then the magnitude will be set to 0.

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

___

#### max

• **max**(): *number*

**Returns:** *number*

the largest of two components of this Vector2 instance.

___

#### min

• **min**(): *number*

**Returns:** *number*

the smallest of two components of this Vector2 instance.

___

#### u

• **u**(): *number*

**Returns:** *number*

the 'x' component of this Vector2 instance.

___

#### v

• **v**(): *number*

**Returns:** *number*

the 'y' component of this Vector2 instance.

### Methods

#### add

▸ **add**(`delta`: *number*): [*Vector2*](#classesvector2md)

Adds 'delta' to the both components of this Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`delta` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **add**(`deltaX`: *number*, `deltaY`: *number*): [*Vector2*](#classesvector2md)

Adds 'deltaX' and 'deltaY' to the components of this Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`deltaX` | *number* |
`deltaY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **add**(`vector`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Adds to the components of this Vector2 instance the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### ceil

▸ **ceil**(): [*Vector2*](#classesvector2md)

Rounds both components of this Vector2 instance to the nearest larger integer.

**Returns:** [*Vector2*](#classesvector2md)

___

#### clamp

▸ **clamp**(): [*Vector2*](#classesvector2md)

Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 0 and ends at 1.

**Returns:** [*Vector2*](#classesvector2md)

▸ **clamp**(`upperBound`: *number*): [*Vector2*](#classesvector2md)

Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 0 and ends at 'upperBound'.

##### Parameters:

Name | Type |
------ | ------ |
`upperBound` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **clamp**(`lowerBound`: *number*, `upperBound`: *number*): [*Vector2*](#classesvector2md)

Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 'lowerBound' and ends at 'upperBound'.

##### Parameters:

Name | Type |
------ | ------ |
`lowerBound` | *number* |
`upperBound` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **clamp**(`lowerBoundForX`: *number*, `upperBoundForX`: *number*, `lowerBoundForY`: *number*, `upperBoundForY`: *number*): [*Vector2*](#classesvector2md)

Defines two ranges from which each components of this Vector2 instance can take a value, and tries to fit those components into the defined ranges, respectively: range 1 from 'lowerBoundForX' to 'upperBoundForX', range 2 from 'lowerBoundForY' to 'upperBoundForY'.

##### Parameters:

Name | Type |
------ | ------ |
`lowerBoundForX` | *number* |
`upperBoundForX` | *number* |
`lowerBoundForY` | *number* |
`upperBoundForY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

___

#### copy

▸ **copy**(): [*Vector2*](#classesvector2md)

**Returns:** [*Vector2*](#classesvector2md)

a new Vector2 instance created with both components of that instance equal to the corresponding components of this Vector2 instance, respectively.

___

#### div

▸ **div**(`divisor`: *number*): [*Vector2*](#classesvector2md)

Divides both components of this Vector2 instance by 'divisor'.

##### Parameters:

Name | Type |
------ | ------ |
`divisor` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **div**(`divisorX`: *number*, `divisorY`: *number*): [*Vector2*](#classesvector2md)

Divides both components of this Vector2 instance by 'divisorX' and 'divisorY', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`divisorX` | *number* |
`divisorY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **div**(`vector`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Divides both components of this Vector2 instance by the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### floor

▸ **floor**(): [*Vector2*](#classesvector2md)

Rounds both components of this Vector2 instance to the nearest smaller integer.

**Returns:** [*Vector2*](#classesvector2md)

___

#### isEquals

▸ **isEquals**(`vector`: [*Vector2*](#classesvector2md)): *boolean*

Check if both components of this Vector2 instance are equal to the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** *boolean*

___

#### lerp

▸ **lerp**(`vector1`: [*Vector2*](#classesvector2md), `vector2`: [*Vector2*](#classesvector2md), `t`: *number*): [*Vector2*](#classesvector2md)

Linearly interpolates between the two given Vector2 instances by 't'.

##### Parameters:

Name | Type |
------ | ------ |
`vector1` | [*Vector2*](#classesvector2md) |
`vector2` | [*Vector2*](#classesvector2md) |
`t` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

___

#### mod

▸ **mod**(`divisor`: *number*): [*Vector2*](#classesvector2md)

Divides both components of this Vector2 instance by 'divisor' and sets each component equal to a remainder of that division.

##### Parameters:

Name | Type |
------ | ------ |
`divisor` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **mod**(`divisorX`: *number*, `divisorY`: *number*): [*Vector2*](#classesvector2md)

Divides both components of this Vector2 instance by 'divisorX' and 'divisorY', respectively, and sets each component equal to a corressponding remainder of that division.

##### Parameters:

Name | Type |
------ | ------ |
`divisorX` | *number* |
`divisorY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

___

#### mult

▸ **mult**(`factor`: *number*): [*Vector2*](#classesvector2md)

Multiplies both components of this Vector2 instance by 'factor'.

##### Parameters:

Name | Type |
------ | ------ |
`factor` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **mult**(`factorX`: *number*, `factorY`: *number*): [*Vector2*](#classesvector2md)

Multiplies both components of this Vector2 instance by 'factorX' and 'factorY', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`factorX` | *number* |
`factorY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **mult**(`vector`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Multiplies both components of this Vector2 instance by the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### negate

▸ **negate**(): [*Vector2*](#classesvector2md)

Inverts both components of this Vector2 instance (changes the sign).

**Returns:** [*Vector2*](#classesvector2md)

___

#### normalize

▸ **normalize**(): [*Vector2*](#classesvector2md)

Scales this Vector2 instance so that its magnitude will be 1.
If the magnitude of this Vector2 instance is 0, than magnitude will not be changed.

**Returns:** [*Vector2*](#classesvector2md)

___

#### rotateBy

▸ **rotateBy**(`radians`: *number*): [*Vector2*](#classesvector2md)

Rotates this Vector2 instance by 'radians'.

##### Parameters:

Name | Type |
------ | ------ |
`radians` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **rotateBy**(`vector`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Rotates this Vector2 instance by the angle of a given Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### rotateTo

▸ **rotateTo**(`radians`: *number*): [*Vector2*](#classesvector2md)

Rotates this Vector2 instance so that its angle will be 'radians'.

##### Parameters:

Name | Type |
------ | ------ |
`radians` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **rotateTo**(`vector`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Rotates this Vector2 instance so that its angle will be the same as a the angle of the given Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### round

▸ **round**(): [*Vector2*](#classesvector2md)

Rounds both components of this Vector2 instance to the nearest integer.

**Returns:** [*Vector2*](#classesvector2md)

___

#### set

▸ **set**(`x`: *number*, `y`: *number*): [*Vector2*](#classesvector2md)

Sets the both components of this Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`x` | *number* |
`y` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **set**(`xy`: *number*): [*Vector2*](#classesvector2md)

Sets the both components of this Vector2 instance to 'xy'.

##### Parameters:

Name | Type |
------ | ------ |
`xy` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **set**(): [*Vector2*](#classesvector2md)

Sets the both components of this Vector2 instance to 0.

**Returns:** [*Vector2*](#classesvector2md)

▸ **set**(`vec`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Sets the components of this Vector2 instance to the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### setMag

▸ **setMag**(`value`: *number*): [*Vector2*](#classesvector2md)

Scales this Vector2 instance so that its magnitude will be 'value'.

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **setMag**(`vector`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Scales this Vector2 instance so that its magnitude will be the same as the magnitude of the given Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### sub

▸ **sub**(`delta`: *number*): [*Vector2*](#classesvector2md)

Subtracts 'delta' from the both components of this Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`delta` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **sub**(`deltaX`: *number*, `deltaY`: *number*): [*Vector2*](#classesvector2md)

Subtracts 'deltaX' and 'deltaY' from the components of this Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`deltaX` | *number* |
`deltaY` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

▸ **sub**(`vector`: [*Vector2*](#classesvector2md)): [*Vector2*](#classesvector2md)

Subtracts from the components of this Vector2 instance the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*Vector2*](#classesvector2md) |

**Returns:** [*Vector2*](#classesvector2md)

___

#### toString

▸ **toString**(): *string*

**Returns:** *string*

the string representation of this Vector2 instance.

___

#### add

▸ `Static`**add**(...`vectors`: [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]]): [*Vector2*](#classesvector2md)

Adds the given Vector2 instances together and returns new Vector2 instance containing the result.

##### Parameters:

Name | Type |
------ | ------ |
`...vectors` | [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]] |

**Returns:** [*Vector2*](#classesvector2md)

___

#### angleBetween

▸ `Static`**angleBetween**(`vector1`: [*Vector2*](#classesvector2md), `vector2`: [*Vector2*](#classesvector2md)): *number*

##### Parameters:

Name | Type |
------ | ------ |
`vector1` | [*Vector2*](#classesvector2md) |
`vector2` | [*Vector2*](#classesvector2md) |

**Returns:** *number*

an unsigned angle (from 0 to PI radians) between the two given Vector2 instances.

___

#### angleBetweenSigned

▸ `Static`**angleBetweenSigned**(`vector1`: [*Vector2*](#classesvector2md), `vector2`: [*Vector2*](#classesvector2md)): *number*

##### Parameters:

Name | Type |
------ | ------ |
`vector1` | [*Vector2*](#classesvector2md) |
`vector2` | [*Vector2*](#classesvector2md) |

**Returns:** *number*

the smallest signed angle (from -PI to PI radians) between the two given Vector2 instances.
The resulting angle is the angle that, if applied as a rotation to the vector 'vector1', will result in the 'vector2'.

___

#### dist

▸ `Static`**dist**(`vector1`: [*Vector2*](#classesvector2md), `vector2`: [*Vector2*](#classesvector2md)): *number*

##### Parameters:

Name | Type |
------ | ------ |
`vector1` | [*Vector2*](#classesvector2md) |
`vector2` | [*Vector2*](#classesvector2md) |

**Returns:** *number*

the distance between the two given Vector2 instances.

___

#### div

▸ `Static`**div**(...`vectors`: [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]]): [*Vector2*](#classesvector2md)

Sequentially divides the given Vector2 instances and returns new Vector2 instance containing the result.

##### Parameters:

Name | Type |
------ | ------ |
`...vectors` | [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]] |

**Returns:** [*Vector2*](#classesvector2md)

___

#### dot

▸ `Static`**dot**(`vector1`: [*Vector2*](#classesvector2md), `vector2`: [*Vector2*](#classesvector2md)): *number*

##### Parameters:

Name | Type |
------ | ------ |
`vector1` | [*Vector2*](#classesvector2md) |
`vector2` | [*Vector2*](#classesvector2md) |

**Returns:** *number*

the dot product of the two given Vector2 instances.

___

#### fromAngle

▸ `Static`**fromAngle**(`angle`: *number*, `magnitude?`: *number*): [*Vector2*](#classesvector2md)

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`angle` | *number* | - |
`magnitude` | *number* | 1 |

**Returns:** [*Vector2*](#classesvector2md)

a new Vector2 instance with angle equal to 'angle' (in radians) and, if specified, magnitude 'magnitude' - otherwise sets the magnitude equal to 1.

___

#### lerp

▸ `Static`**lerp**(`vectorOut`: [*Vector2*](#classesvector2md), `vector1`: [*Vector2*](#classesvector2md), `vector2`: [*Vector2*](#classesvector2md), `t`: *number*): [*Vector2*](#classesvector2md)

Linearly interpolates between the two given Vector2 instances by 't'.
Result both is stored in the provied by user 'vectorOut' Vector2 instance and returned by the function.

##### Parameters:

Name | Type |
------ | ------ |
`vectorOut` | [*Vector2*](#classesvector2md) |
`vector1` | [*Vector2*](#classesvector2md) |
`vector2` | [*Vector2*](#classesvector2md) |
`t` | *number* |

**Returns:** [*Vector2*](#classesvector2md)

___

#### mult

▸ `Static`**mult**(...`vectors`: [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]]): [*Vector2*](#classesvector2md)

Multiplies the given Vector2 instances together and returns new Vector2 instance containing the result.

##### Parameters:

Name | Type |
------ | ------ |
`...vectors` | [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]] |

**Returns:** [*Vector2*](#classesvector2md)

___

#### random

▸ `Static`**random**(`magnitude?`: *number*): [*Vector2*](#classesvector2md)

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`magnitude` | *number* | 1 |

**Returns:** [*Vector2*](#classesvector2md)

a new Vector2 instance with a random angle and, if specified, magnitude 'magnitude' - otherwise sets the magnitude equal to 1.

___

#### sub

▸ `Static`**sub**(...`vectors`: [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]]): [*Vector2*](#classesvector2md)

Sequentially subtracts all the given Vector2 instances and returns new Vector2 instance containing the result.

##### Parameters:

Name | Type |
------ | ------ |
`...vectors` | [[*Vector2*](#classesvector2md), [*Vector2*](#classesvector2md), ...Vector2[]] |

**Returns:** [*Vector2*](#classesvector2md)

___

#### zero

▸ `Static`**zero**(): [*Vector2*](#classesvector2md)

**Returns:** [*Vector2*](#classesvector2md)

a new Vector2 instance with both its components set to 0.


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

Multiply your degrees by this to transform them to radians.

___

### RAD2DEG

• `Const` **RAD2DEG**: *number*

Multiply your radians by this to transform them to degrees.
