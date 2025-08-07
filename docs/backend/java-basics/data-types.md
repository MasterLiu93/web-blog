---
sidebar_position: 2
---

# 1.2 基本数据类型

Java是强类型语言，提供了八种基本数据类型（primitive data types）。这些基本类型可分为四大类：整型、浮点型、字符型和布尔型。

## 整数类型

Java提供了四种整数类型，主要区别在于所占内存空间不同，可表示数值范围也不同。

| 类型   | 占用空间 | 取值范围                                   | 默认值 |
| ------ | -------- | ------------------------------------------ | ------ |
| byte   | 1字节    | -128 ~ 127 (-2^7 ~ 2^7-1)                  | 0      |
| short  | 2字节    | -32,768 ~ 32,767 (-2^15 ~ 2^15-1)          | 0      |
| int    | 4字节    | -2,147,483,648 ~ 2,147,483,647 (-2^31 ~ 2^31-1) | 0      |
| long   | 8字节    | -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807 (-2^63 ~ 2^63-1) | 0L     |

示例代码：

```java
byte b = 127;
short s = 32767;
int i = 2147483647;
long l = 9223372036854775807L;  // 注意long类型的数值后面要加L或l
```

**特殊值表示法：**

```java
// 二进制表示（Java 7及以上版本支持）
int binaryNumber = 0b1010;  // 10

// 八进制表示
int octalNumber = 012;     // 10

// 十六进制表示
int hexNumber = 0xA;       // 10
```

## 浮点类型

Java提供了两种浮点类型，用于表示带小数点的数值。

| 类型   | 占用空间 | 精度      | 默认值 |
| ------ | -------- | --------- | ------ |
| float  | 4字节    | 单精度    | 0.0f   |
| double | 8字节    | 双精度    | 0.0d   |

示例代码：

```java
float f = 3.14f;  // 注意float类型的数值后面要加F或f
double d = 3.14;  // double是默认的浮点类型
```

**特殊值：**

```java
double posInf = Double.POSITIVE_INFINITY;  // 正无穷大
double negInf = Double.NEGATIVE_INFINITY;  // 负无穷大
double nan = Double.NaN;                  // 非数值

// 判断非数值
boolean isNaN = Double.isNaN(nan);        // true
```

### 浮点数精度问题

浮点数在计算机中采用二进制表示，某些十进制小数无法精确表示，这会导致精度问题。

```java
double result = 0.1 + 0.2;
System.out.println(result);  // 输出：0.30000000000000004

// 使用BigDecimal进行精确计算
BigDecimal bd1 = new BigDecimal("0.1");
BigDecimal bd2 = new BigDecimal("0.2");
BigDecimal bdResult = bd1.add(bd2);
System.out.println(bdResult);  // 输出：0.3
```

## 字符类型

Java的char类型用于表示单个字符，基于Unicode编码。

| 类型 | 占用空间 | 取值范围        | 默认值 |
| ---- | -------- | --------------- | ------ |
| char | 2字节    | 0 ~ 65,535 (2^16-1) | '\u0000' |

示例代码：

```java
char c1 = 'A';        // 直接使用字符
char c2 = '\u0041';   // 使用Unicode编码
char c3 = 65;         // 使用ASCII码
```

## 布尔类型

Java的boolean类型用于表示逻辑值：true或false。

| 类型    | 取值      | 默认值 |
| ------- | --------- | ------ |
| boolean | true/false | false  |

示例代码：

```java
boolean flag = true;
boolean result = 10 > 5;  // true
```

## 自动类型转换与强制类型转换

### 自动类型转换（隐式转换）

当将一个数据类型的值赋给另一个数据类型变量时，如果数据类型兼容且目标类型"大于"源类型，则可以进行自动类型转换。

转换顺序（从小到大）：
```
byte → short → int → long → float → double
        ↑
       char
```

```java
byte b = 10;
short s = b;      // byte → short
int i = s;        // short → int
long l = i;       // int → long
float f = l;      // long → float
double d = f;     // float → double

char c = 'A';
int i2 = c;       // char → int
```

### 强制类型转换（显式转换）

当需要将"大"类型转换为"小"类型时，需要进行强制类型转换，可能会导致精度损失或数据溢出。

```java
double d = 3.14;
float f = (float) d;    // double → float

int i = (int) f;        // float → int，结果为3，小数部分被截断

byte b = (byte) 128;    // 超出byte范围，结果为-128（溢出）
```

## 包装类型（引用类型）

为了在需要使用对象的场合能够使用基本类型，Java为每个基本类型提供了对应的包装类。

| 基本类型 | 包装类型  |
| -------- | --------- |
| byte     | Byte      |
| short    | Short     |
| int      | Integer   |
| long     | Long      |
| float    | Float     |
| double   | Double    |
| char     | Character |
| boolean  | Boolean   |

### 自动装箱与自动拆箱

自动装箱（Autoboxing）：基本类型自动转换为包装类型
自动拆箱（Unboxing）：包装类型自动转换为基本类型

```java
// 自动装箱
Integer num = 10;  // 等价于 Integer num = Integer.valueOf(10);

// 自动拆箱
int value = num;   // 等价于 int value = num.intValue();

// 在运算中的自动装箱与拆箱
Integer result = num + 5;  // num自动拆箱，计算后结果自动装箱
```

### 缓存机制

Integer等包装类型为提高性能，对部分范围内的数值进行了缓存。

```java
Integer a = 127;
Integer b = 127;
System.out.println(a == b);  // true，因为在缓存范围内（-128~127）

Integer c = 128;
Integer d = 128;
System.out.println(c == d);  // false，超出缓存范围，创建了新对象

// 推荐使用equals方法比较包装类型
System.out.println(c.equals(d));  // true
```

## 字面量

字面量是程序中直接表示的固定值。

```java
// 整数字面量
int a = 10;         // 十进制
int b = 0b1010;     // 二进制
int c = 012;        // 八进制
int d = 0xA;        // 十六进制

// 浮点数字面量
double e = 3.14;
double f = 3.14e2;  // 科学计数法，表示3.14 × 10²

// 字符和字符串字面量
char g = 'A';
String h = "Hello";

// 布尔字面量
boolean i = true;
boolean j = false;

// 特殊字面量
char newline = '\n';  // 换行符
String text = "Hello\tWorld";  // 制表符
String path = "C:\\Program Files";  // 转义反斜杠
```

## 常量（final变量）

使用final关键字声明的变量，一旦赋值后不能再改变。

```java
final int MAX_VALUE = 100;
final double PI = 3.14159;

// 命名常量通常使用大写字母和下划线
final String DATABASE_URL = "jdbc:mysql://localhost:3306/mydb";
```

## 面试题

### 1. Java基本数据类型有哪些？它们的大小和取值范围是多少？

**答**：Java有8种基本数据类型：
- 整型：byte（1字节，-128~127）、short（2字节，-32768~32767）、int（4字节，-2^31~2^31-1）、long（8字节，-2^63~2^63-1）
- 浮点型：float（4字节，单精度）、double（8字节，双精度）
- 字符型：char（2字节，0~65535）
- 布尔型：boolean（true/false）

### 2. 为什么Java中的char类型占2个字节，而不是1个字节？

**答**：Java采用Unicode编码来表示字符，以支持国际化。由于Unicode字符集需要更多位来表示各国语言的字符，所以Java的char类型使用2个字节（16位），可以表示65536个不同的字符，覆盖了大部分语言的字符集。而ASCII码只需要1个字节，因为它只定义了128个字符，主要针对英语环境。

### 3. Java中基本类型和包装类型有什么区别？什么是自动装箱和拆箱？

**答**：
- 基本类型：直接存储值，存放在栈中，效率高
- 包装类型：是对象，存放在堆中，可以为null，提供了很多实用方法

自动装箱是将基本类型自动转换为对应的包装类型，例如`Integer num = 10;`
自动拆箱是将包装类型自动转换为对应的基本类型，例如`int value = num;`

这一特性是Java 5引入的，简化了代码编写，背后是通过调用`valueOf()`和类似`intValue()`的方法实现的。

### 4. float f = 3.14是否正确？为什么？

**答**：不正确。3.14默认是double类型（8字节），而float类型是4字节，将double赋值给float可能损失精度，Java不允许这种隐式转换。

正确的写法是：
```java
float f = 3.14f; // 使用f或F后缀
// 或者
float f = (float) 3.14; // 强制类型转换
```

### 5. 下面代码的输出结果是什么？为什么？
```java
Integer a = 128;
Integer b = 128;
System.out.println(a == b);

Integer c = 127;
Integer d = 127;
System.out.println(c == d);
```

**答**：
```
false
true
```

这是因为Integer类内部维护了一个IntegerCache缓存，默认缓存范围是-128到127之间的整数。当创建这个范围内的Integer对象时，会直接从缓存中获取，所以c和d指向同一个对象。而128超出了缓存范围，所以a和b是两个不同的对象。

### 6. 为什么浮点数不能精确表示0.1？如何在Java中进行精确的金融计算？

**答**：
浮点数在计算机中是以二进制表示的，而十进制的0.1无法用有限位数的二进制精确表示（类似于十进制中1/3需要无限的小数位表示）。

对于精确计算，尤其是金融计算，应使用`java.math.BigDecimal`类：

```java
BigDecimal a = new BigDecimal("0.1");
BigDecimal b = new BigDecimal("0.2");
BigDecimal result = a.add(b); // 使用字符串构造器以避免精度问题
System.out.println(result); // 输出0.3
```

### 7. 什么是溢出？Java中如何处理整数溢出？

**答**：
溢出是当计算结果超出数据类型表示范围时发生的。Java不会抛出异常处理整数溢出，而是对结果进行截断或"环绕"处理。

```java
int max = Integer.MAX_VALUE;
int result = max + 1;
System.out.println(result); // 输出-2147483648（Integer.MIN_VALUE）
```

可以使用Java 8引入的`Math.addExact()`、`Math.subtractExact()`等方法，这些方法在溢出时会抛出ArithmeticException异常。

### 8. `3*0.1 == 0.3`在Java中的结果是什么？为什么？

**答**：
结果是`false`。由于浮点数精度问题，`3*0.1`的实际计算结果略微不等于0.3。

可以通过以下方式进行近似相等的比较：
```java
double epsilon = 1e-10; // 允许的误差范围
Math.abs(3*0.1 - 0.3) < epsilon; // true
```

### 9. char类型可以存储中文字符吗？为什么？

**答**：
可以存储部分中文字符。Java的char类型是基于Unicode编码的，占用2字节，可以表示基本平面（BMP）的字符，包括大部分常用汉字。

```java
char c = '中';
System.out.println((int)c); // 输出20013，'中'字的Unicode编码
```

但是，对于Unicode扩展平面中的字符（如一些罕见汉字、表情符号等），需要使用两个char（称为代理对）来表示，这时就需要使用String类型。

### 10. 基本类型和包装类型的默认值分别是什么？

**答**：
- 基本类型默认值：
  - byte, short, int, long: 0
  - float, double: 0.0
  - char: '\u0000'（空字符）
  - boolean: false

- 包装类型默认值都是null，因为它们是对象类型。

这在类的成员变量中特别重要，局部变量则必须显式初始化才能使用。
