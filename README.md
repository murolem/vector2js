<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Classes](#classes)
  - [Class: default](#class-default)
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

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@aliser/vector2 / [Exports](#modulesmd)

# Classes


<a name="classesdefaultmd"></a>

[@aliser/vector2](#readmemd) / [Exports](#modulesmd) / default

## Class: default

### Hierarchy

* **default**

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

#### Methods

- [add](#add)
- [ceil](#ceil)
- [clamp](#clamp)
- [copy](#copy)
- [div](#div)
- [floor](#floor)
- [isEquals](#isequals)
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

### Constructors

#### constructor

\+ **new default**(`x`: *number*, `y`: *number*): [*default*](#classesdefaultmd)

Creates a new Vector2 instance with the components set to those of arguments, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`x` | *number* |
`y` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:37

\+ **new default**(`vector`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Creates a new Vector2 instance with the components of that instance equal to the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:42

\+ **new default**(`xy`: *number*): [*default*](#classesdefaultmd)

Creates a new Vector2 instance with both components of that instance equal to 'xy'.

##### Parameters:

Name | Type |
------ | ------ |
`xy` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:46

\+ **new default**(): [*default*](#classesdefaultmd)

Creates a new Vector2 instance with both components of that instance equal to 0.

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:50

### Properties

#### x

• **x**: *number*

Defined in: index.ts:36

___

#### y

• **y**: *number*

Defined in: index.ts:37

### Accessors

#### 0

• **0**(): *number*

**Returns:** *number*

the 'x' component of this Vector2 instance.

Defined in: index.ts:58

___

#### 1

• **1**(): *number*

**Returns:** *number*

the 'y' component of this Vector2 instance.

Defined in: index.ts:65

___

#### angle

• **angle**(): *number*

The angle in radians of this Vector2 instance.

**Returns:** *number*

Defined in: index.ts:110

• **angle**(`value`: *number*): *void*

The angle in radians of this Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

Defined in: index.ts:114

___

#### mag

• **mag**(): *number*

The length of this Vector2 instance.
If negative values or values less than zero provided, then the magnitude will be set to 0.

**Returns:** *number*

Defined in: index.ts:99

• **mag**(`value`: *number*): *void*

The length of this Vector2 instance.
If negative values or values less than zero provided, then the magnitude will be set to 0.

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** *void*

Defined in: index.ts:103

___

#### max

• **max**(): *number*

**Returns:** *number*

the largest of two components of this Vector2 instance.

Defined in: index.ts:84

___

#### min

• **min**(): *number*

**Returns:** *number*

the smallest of two components of this Vector2 instance.

Defined in: index.ts:91

### Methods

#### add

▸ **add**(`delta`: *number*): [*default*](#classesdefaultmd)

Adds 'delta' to the both components of this Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`delta` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:161

▸ **add**(`deltaX`: *number*, `deltaY`: *number*): [*default*](#classesdefaultmd)

Adds 'deltaX' and 'deltaY' to the components of this Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`deltaX` | *number* |
`deltaY` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:165

▸ **add**(`vector`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Adds to the components of this Vector2 instance the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:169

___

#### ceil

▸ **ceil**(): [*default*](#classesdefaultmd)

Rounds both components of this Vector2 instance to the nearest larger integer.

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:431

___

#### clamp

▸ **clamp**(): [*default*](#classesdefaultmd)

Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 0 and ends at 1.

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:359

▸ **clamp**(`upperBound`: *number*): [*default*](#classesdefaultmd)

Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 0 and ends at 'upperBound'.

##### Parameters:

Name | Type |
------ | ------ |
`upperBound` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:363

▸ **clamp**(`lowerBound`: *number*, `upperBound`: *number*): [*default*](#classesdefaultmd)

Defines a range from which both components of this Vector2 instance can take a value, and tries to fit those components into this range, which starts from 'lowerBound' and ends at 'upperBound'.

##### Parameters:

Name | Type |
------ | ------ |
`lowerBound` | *number* |
`upperBound` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:367

▸ **clamp**(`lowerBoundForX`: *number*, `upperBoundForX`: *number*, `lowerBoundForY`: *number*, `upperBoundForY`: *number*): [*default*](#classesdefaultmd)

Defines two ranges from which each components of this Vector2 instance can take a value, and tries to fit those components into the defined ranges, respectively: range 1 from 'lowerBoundForX' to 'upperBoundForX', range 2 from 'lowerBoundForY' to 'upperBoundForY'.

##### Parameters:

Name | Type |
------ | ------ |
`lowerBoundForX` | *number* |
`upperBoundForX` | *number* |
`lowerBoundForY` | *number* |
`upperBoundForY` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:371

___

#### copy

▸ **copy**(): [*default*](#classesdefaultmd)

**Returns:** [*default*](#classesdefaultmd)

a new Vector2 instance created with both components of that instance equal to the corresponding components of this Vector2 instance, respectively.

Defined in: index.ts:352

___

#### div

▸ **div**(`divisor`: *number*): [*default*](#classesdefaultmd)

Divides both components of this Vector2 instance by 'divisor'.

##### Parameters:

Name | Type |
------ | ------ |
`divisor` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:254

▸ **div**(`divisorX`: *number*, `divisorY`: *number*): [*default*](#classesdefaultmd)

Divides both components of this Vector2 instance by 'divisorX' and 'divisorY', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`divisorX` | *number* |
`divisorY` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:258

▸ **div**(`vector`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Divides both components of this Vector2 instance by the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:262

___

#### floor

▸ **floor**(): [*default*](#classesdefaultmd)

Rounds both components of this Vector2 instance to the nearest smaller integer.

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:441

___

#### isEquals

▸ **isEquals**(`vector`: [*default*](#classesdefaultmd)): *boolean*

Check if both components of this Vector2 instance are equal to the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** *boolean*

Defined in: index.ts:345

___

#### mod

▸ **mod**(`divisor`: *number*): [*default*](#classesdefaultmd)

Divides both components of this Vector2 instance by 'divisor' and sets each component equal to a remainder of that division.

##### Parameters:

Name | Type |
------ | ------ |
`divisor` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:451

▸ **mod**(`divisorX`: *number*, `divisorY`: *number*): [*default*](#classesdefaultmd)

Divides both components of this Vector2 instance by 'divisorX' and 'divisorY', respectively, and sets each component equal to a corressponding remainder of that division.

##### Parameters:

Name | Type |
------ | ------ |
`divisorX` | *number* |
`divisorY` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:455

___

#### mult

▸ **mult**(`factor`: *number*): [*default*](#classesdefaultmd)

Multiplies both components of this Vector2 instance by 'factor'.

##### Parameters:

Name | Type |
------ | ------ |
`factor` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:223

▸ **mult**(`factorX`: *number*, `factorY`: *number*): [*default*](#classesdefaultmd)

Multiplies both components of this Vector2 instance by 'factorX' and 'factorY', respectively.

##### Parameters:

Name | Type |
------ | ------ |
`factorX` | *number* |
`factorY` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:227

▸ **mult**(`vector`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Multiplies both components of this Vector2 instance by the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:231

___

#### negate

▸ **negate**(): [*default*](#classesdefaultmd)

Inverts both components of this Vector2 instance (changes the sign).

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:338

___

#### normalize

▸ **normalize**(): [*default*](#classesdefaultmd)

Scales this Vector2 instance so that its magnitude will be 1.
If the magnitude of this Vector2 instance is 0, than magnitude will not be changed.

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:331

___

#### rotateBy

▸ **rotateBy**(`radians`: *number*): [*default*](#classesdefaultmd)

Rotates this Vector2 instance by 'radians'.

##### Parameters:

Name | Type |
------ | ------ |
`radians` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:314

▸ **rotateBy**(`vector`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Rotates this Vector2 instance by the angle of a given Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:318

___

#### rotateTo

▸ **rotateTo**(`radians`: *number*): [*default*](#classesdefaultmd)

Rotates this Vector2 instance so that its angle will be 'radians'.

##### Parameters:

Name | Type |
------ | ------ |
`radians` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:298

▸ **rotateTo**(`vector`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Rotates this Vector2 instance so that its angle will be the same as a the angle of the given Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:302

___

#### round

▸ **round**(): [*default*](#classesdefaultmd)

Rounds both components of this Vector2 instance to the nearest integer.

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:421

___

#### set

▸ **set**(`x`: *number*, `y`: *number*): [*default*](#classesdefaultmd)

Sets the both components of this Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`x` | *number* |
`y` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:121

▸ **set**(`xy`: *number*): [*default*](#classesdefaultmd)

Sets the both components of this Vector2 instance to 'xy'.

##### Parameters:

Name | Type |
------ | ------ |
`xy` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:125

▸ **set**(): [*default*](#classesdefaultmd)

Sets the both components of this Vector2 instance to 0.

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:129

▸ **set**(`vec`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Sets the components of this Vector2 instance to the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vec` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:133

___

#### setMag

▸ **setMag**(`value`: *number*): [*default*](#classesdefaultmd)

Scales this Vector2 instance so that its magnitude will be 'value'.

##### Parameters:

Name | Type |
------ | ------ |
`value` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:285

▸ **setMag**(`vector`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Scales this Vector2 instance so that its magnitude will be the same as the magnitude of the given Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:289

___

#### sub

▸ **sub**(`delta`: *number*): [*default*](#classesdefaultmd)

Subtracts 'delta' from the both components of this Vector2 instance.

##### Parameters:

Name | Type |
------ | ------ |
`delta` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:192

▸ **sub**(`deltaX`: *number*, `deltaY`: *number*): [*default*](#classesdefaultmd)

Subtracts 'deltaX' and 'deltaY' from the components of this Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`deltaX` | *number* |
`deltaY` | *number* |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:196

▸ **sub**(`vector`: [*default*](#classesdefaultmd)): [*default*](#classesdefaultmd)

Subtracts from the components of this Vector2 instance the corresponding components of the given Vector2 instance, respectively.

##### Parameters:

Name | Type |
------ | ------ |
`vector` | [*default*](#classesdefaultmd) |

**Returns:** [*default*](#classesdefaultmd)

Defined in: index.ts:200

___

#### toString

▸ **toString**(): *string*

**Returns:** *string*

the string representation of this Vector2 instance.

Defined in: index.ts:77


<a name="modulesmd"></a>

[@aliser/vector2](#readmemd) / Exports

# @aliser/vector2

## Table of contents

### Classes

- [default](#classesdefaultmd)
