---
sidebar_position: 3
title: "String相关"
description: "Java String类详解"
authors: [Laby]
last_update:
  date: 2025-08-07
  author: Laby
---

# String相关

String是Java中使用最广泛的类之一，用于表示字符串。虽然字符串在Java中作为对象处理，但Java提供了特殊的语法支持，使其用起来像基本数据类型一样方便。

## String的特性

### 不可变性（Immutability）

String对象是**不可变的**（immutable），这意味着一旦创建，其内容就不能被修改。任何修改操作都会创建一个新的String对象。

```java
String s1 = "Hello";
s1.concat(" World");  // 创建了新的字符串"Hello World"，但s1没有改变
System.out.println(s1);  // 输出: Hello

// 如果要保存修改后的值，需要重新赋值
s1 = s1.concat(" World");
System.out.println(s1);  // 输出: Hello World
```

**不可变性的好处：**

1. **线程安全**：多个线程可以同时访问同一个字符串而不会导致问题
2. **安全性**：用于密码、网络连接等敏感信息时更安全
3. **哈希缓存**：适合作为HashMap或HashSet的键
4. **字符串常量池**：允许JVM优化内存使用

### 字符串常量池（String Pool）

为了提高效率和减少内存消耗，Java为字符串维护了一个特殊的内存区域，称为"字符串常量池"。

```java
String s1 = "Hello";  // 创建一个字符串并放入常量池
String s2 = "Hello";  // 直接引用常量池中的字符串
String s3 = new String("Hello");  // 强制在堆中创建新对象

System.out.println(s1 == s2);  // true，指向同一个对象
System.out.println(s1 == s3);  // false，指向不同对象
System.out.println(s1.equals(s3));  // true，内容相同
```

**字符串创建方式：**

1. **字面量**：使用双引号直接创建，如`String s = "Hello"`
2. **构造函数**：使用`new`关键字创建，如`String s = new String("Hello")`
3. **字符串方法**：通过其他字符串的方法创建，如`"Hello".concat(" World")`

## 字符串常用操作

### 1. 字符串长度和判空

```java
String str = "Hello World";
int length = str.length();  // 返回字符串的长度: 11

// 判断字符串是否为空
boolean isEmpty = str.isEmpty();  // false
boolean isBlank = str.isBlank();  // Java 11+ 特性，检查是否为空或仅包含空白字符
```

### 2. 字符串比较

```java
String s1 = "hello";
String s2 = "HELLO";

// 内容比较
boolean equals = s1.equals(s2);  // false，区分大小写
boolean equalsIgnoreCase = s1.equalsIgnoreCase(s2);  // true，不区分大小写

// 比较字符串大小（按字典顺序）
int compareResult = s1.compareTo(s2);  // 正值，表示s1大于s2
```

### 3. 字符串查找

```java
String str = "Hello World";

// 查找字符和子串
int index1 = str.indexOf('o');  // 4，第一个'o'的位置
int index2 = str.indexOf("World");  // 6，子串的起始位置
int index3 = str.lastIndexOf('o');  // 7，最后一个'o'的位置

// 检查是否包含特定字符或子串
boolean contains = str.contains("ello");  // true
boolean startsWith = str.startsWith("He");  // true
boolean endsWith = str.endsWith("ld");  // true
```

### 4. 字符串提取

```java
String str = "Hello World";

// 提取子串
String sub1 = str.substring(6);  // "World"，从索引6到末尾
String sub2 = str.substring(0, 5);  // "Hello"，从索引0到5（不包括5）

// 提取字符
char ch = str.charAt(1);  // 'e'，索引1处的字符
```

### 5. 字符串修改

由于String是不可变的，所有"修改"操作都会返回一个新的字符串。

```java
String str = "Hello World";

// 转换大小写
String upper = str.toUpperCase();  // "HELLO WORLD"
String lower = str.toLowerCase();  // "hello world"

// 替换字符或子串
String replaced = str.replace('l', 'L');  // "HeLLo WorLd"
String replacedAll = str.replaceAll("o", "O");  // "HellO WOrld"，支持正则表达式

// 去除首尾空白
String text = "  trim example  ";
String trimmed = text.trim();  // "trim example"
String stripped = text.strip();  // Java 11+，类似trim但能处理Unicode空白字符
```

### 6. 字符串连接

```java
String s1 = "Hello";
String s2 = "World";

// 使用+运算符
String combined = s1 + " " + s2;  // "Hello World"

// 使用concat方法
String concated = s1.concat(" ").concat(s2);  // "Hello World"

// 使用StringJoiner（Java 8+）
StringJoiner joiner = new StringJoiner(", ");
joiner.add("Apple").add("Banana").add("Orange");
String joined = joiner.toString();  // "Apple, Banana, Orange"

// 使用String.join（Java 8+）
String joinedWithPrefix = String.join(" | ", "A", "B", "C");  // "A | B | C"
```

## StringBuilder和StringBuffer

由于String的不可变性，频繁修改字符串会创建多个临时对象，影响性能。Java提供了`StringBuilder`和`StringBuffer`类来高效处理可变字符串。

### StringBuilder

适用于单线程环境，效率更高。

```java
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();  // "Hello World"

// 其他常用操作
sb.insert(5, "!");  // 在指定位置插入：Hello! World
sb.delete(5, 6);  // 删除指定范围的字符：Hello World
sb.reverse();  // 反转字符串：dlroW olleH
sb.setCharAt(0, 'h');  // 设置指定位置的字符：dlrow olleH
```

### StringBuffer

与StringBuilder功能相同，但是线程安全的（方法是同步的），适用于多线程环境。

```java
StringBuffer buffer = new StringBuffer();
buffer.append("Thread");
buffer.append(" ");
buffer.append("Safe");
String result = buffer.toString();  // "Thread Safe"
```

### 性能比较

```java
// 使用String连接（性能最差）
String s = "";
for (int i = 0; i < 10000; i++) {
    s += i;  // 每次循环都会创建新的String对象
}

// 使用StringBuilder（单线程时性能最好）
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append(i);  // 修改同一个对象
}
String result = sb.toString();

// 使用StringBuffer（多线程时安全）
StringBuffer buffer = new StringBuffer();
for (int i = 0; i < 10000; i++) {
    buffer.append(i);
}
String threadSafeResult = buffer.toString();
```

## 字符串格式化

Java提供了多种方式来格式化字符串。

### String.format方法

```java
String name = "John";
int age = 30;
String formatted = String.format("Name: %s, Age: %d", name, age);
// "Name: John, Age: 30"

// 常用格式化占位符
String percent = String.format("%.2f%%", 75.8);  // "75.80%"
String date = String.format("%tF", new Date());  // 例如："2023-09-15"
```

### printf方法

```java
System.out.printf("Name: %s, Age: %d%n", name, age);
// 输出: Name: John, Age: 30
```

### MessageFormat类

```java
String message = MessageFormat.format("At {0,time} on {0,date}, {1} said \"{2}\"",
    new Date(), "John", "Hello");
// 例如："At 12:30:45 PM on Sep 15, 2023, John said "Hello""
```

## 字符串拆分和合并

### 字符串拆分

```java
String csv = "Apple,Banana,Orange";
String[] fruits = csv.split(",");  // ["Apple", "Banana", "Orange"]

// 指定限制（最多拆分的部分）
String text = "A:B:C:D:E";
String[] parts = text.split(":", 3);  // ["A", "B", "C:D:E"]

// 使用正则表达式拆分
String data = "1;2,3.4";
String[] numbers = data.split("[;,.]");  // ["1", "2", "3", "4"]
```

### 字符串合并

```java
// 使用String.join（Java 8+）
String[] words = {"Hello", "beautiful", "world"};
String sentence = String.join(" ", words);  // "Hello beautiful world"

// 使用StringJoiner
StringJoiner joiner = new StringJoiner(", ", "[", "]");
for (String word : words) {
    joiner.add(word);
}
String result = joiner.toString();  // "[Hello, beautiful, world]"

// 使用Stream API（Java 8+）
String combined = Arrays.stream(words)
    .collect(Collectors.joining(" "));  // "Hello beautiful world"
```

## 正则表达式与字符串

Java的String类提供了对正则表达式的支持。

```java
String text = "Java is fun. Java is powerful.";

// 替换所有匹配
String replaced = text.replaceAll("Java", "Python");  // "Python is fun. Python is powerful."

// 检查是否匹配模式
boolean isEmail = "user@example.com".matches("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");

// 提取匹配内容
Pattern pattern = Pattern.compile("\\d+");  // 匹配一个或多个数字
Matcher matcher = pattern.matcher("There are 123 apples and 456 oranges");
while (matcher.find()) {
    System.out.println(matcher.group());  // 输出: 123 然后 456
}
```

## String与其他数据类型的转换

### 基本类型转String

```java
// 使用+运算符
String s1 = 123 + "";  // "123"

// 使用String.valueOf()
String s2 = String.valueOf(123);  // "123"
String s3 = String.valueOf(true);  // "true"
String s4 = String.valueOf(3.14f);  // "3.14"

// 使用包装类的toString方法
String s5 = Integer.toString(123);  // "123"
String s6 = Double.toString(3.14);  // "3.14"
```

### String转基本类型

```java
// 使用包装类的parseXxx方法
int i = Integer.parseInt("123");  // 123
double d = Double.parseDouble("3.14");  // 3.14
boolean b = Boolean.parseBoolean("true");  // true

// 使用包装类的valueOf方法（返回包装类对象）
Integer intObj = Integer.valueOf("123");  // Integer对象，值为123
Double doubleObj = Double.valueOf("3.14");  // Double对象，值为3.14
```

## String内存模型与性能优化

### 字符串在内存中的表示

在Java 9之前，String内部使用char数组存储字符；从Java 9开始，String内部使用byte数组+编码标记的方式存储，以减少内存使用。

```java
// Java 8 及之前
public final class String {
    private final char[] value;  // 字符数组
    // ...
}

// Java 9+
public final class String {
    private final byte[] value;  // 字节数组
    private final byte coder;    // 编码标记（Latin-1或UTF-16）
    // ...
}
```

### 字符串性能优化技巧

1. **减少字符串连接操作**：使用StringBuilder代替+操作符进行多次连接
2. **重用字符串**：对于常用字符串，考虑使用常量池（如`String s = "constant"` 而不是 `new String("constant")`）
3. **适当时使用字符数组**：对于需要频繁修改单个字符的场景，考虑直接使用char[]
4. **使用intern()方法**：将运行时创建的字符串添加到常量池
   ```java
   String s1 = new String("hello").intern();
   String s2 = "hello";
   System.out.println(s1 == s2);  // true，因为s1被添加到了常量池
   ```

## 面试题

### 1. 为什么String类在Java中是不可变的？有什么好处？

**答**：
String类在Java中被设计为不可变主要有以下几个好处：

1. **安全性**：字符串常用于存储敏感信息（如密码、网络连接等），如果可变，则易受攻击
2. **线程安全**：不可变对象天生是线程安全的，无需同步
3. **哈希缓存**：String常用作HashMap/HashSet的键，不可变性保证哈希码不变，可以缓存
4. **字符串常量池**：可以安全地共享，节省内存
5. **类加载安全**：JVM类加载器大量使用String作为参数，不可变性提供了安全保障

Java通过final类、私有且final的内部字符数组、不提供修改内部状态的方法等方式实现String的不可变性。

### 2. String, StringBuilder和StringBuffer的区别？

**答**：
1. **可变性**：
   - String：不可变，任何修改操作都会创建新对象
   - StringBuilder和StringBuffer：可变，修改不会创建新对象

2. **线程安全**：
   - String：不可变，因此线程安全
   - StringBuilder：非线程安全，适用于单线程环境
   - StringBuffer：线程安全（方法都是synchronized），适用于多线程环境

3. **性能**：
   - String：频繁修改性能最差（创建大量临时对象）
   - StringBuilder：单线程下性能最好
   - StringBuffer：由于同步开销，性能次于StringBuilder，但多线程安全

使用建议：
- 少量字符串操作：直接使用String
- 单线程下大量操作：使用StringBuilder
- 多线程下共享的大量操作：使用StringBuffer

### 3. 请解释一下String str1 = "abc"和String str2 = new String("abc")的区别？

**答**：
两者创建字符串的机制不同：

1. `String str1 = "abc"`:
   - 首先检查字符串常量池中是否存在"abc"
   - 如果存在，直接返回常量池中的引用
   - 如果不存在，创建一个新的字符串对象并放入常量池，然后返回引用

2. `String str2 = new String("abc")`:
   - 无论常量池中是否存在，都会在堆内存中创建一个新对象
   - 字符串字面量"abc"仍会在常量池中创建（如果之前不存在）
   - str2指向堆中的新对象，而非常量池中的对象

比较：
```java
String s1 = "abc";
String s2 = "abc";
String s3 = new String("abc");
String s4 = new String("abc");

System.out.println(s1 == s2);  // true，指向常量池中的同一个对象
System.out.println(s1 == s3);  // false，一个指向常量池，一个指向堆
System.out.println(s3 == s4);  // false，指向堆中的不同对象
System.out.println(s1.equals(s3));  // true，内容相同
```

### 4. String类的intern()方法有什么作用？

**答**：
`intern()`方法用于将字符串对象添加到字符串常量池，如果池中已经存在相同内容的字符串，则返回池中对象的引用；否则将此字符串添加到常量池并返回其引用。

主要作用：
1. 节省内存：通过共享相同内容的字符串对象
2. 提高字符串比较性能：使用==而非equals比较相同内容的字符串

示例：
```java
String s1 = new String("hello");  // 在堆中创建对象
String s2 = "hello";  // 常量池中的对象
System.out.println(s1 == s2);  // false

String s3 = s1.intern();  // 返回常量池中的"hello"引用
System.out.println(s3 == s2);  // true
```

在Java 7之后，字符串常量池从永久代移到了堆中，intern()的行为有所变化：如果常量池中不存在，Java 7及之后会将堆中对象的引用放入常量池，而不是复制对象。

### 5. 使用"+"连接字符串和使用StringBuilder的append方法，哪个性能更好？为什么？

**答**：
在多次字符串连接的情况下，StringBuilder的append方法性能更好，原因如下：

1. 使用"+"连接字符串：
   - 编译器会将简单的字符串常量连接优化为一个常量，如`"a" + "b"`会优化为`"ab"`
   - 但对于包含变量的连接或循环中的连接，每次操作都会创建新的String对象
   - 在循环中使用"+"，会导致创建大量临时对象，增加GC负担

2. 使用StringBuilder.append():
   - 操作同一个可变对象，不创建临时字符串
   - 内部实现维护一个可变的字符数组，根据需要扩容

示例：
```java
// 使用+（在内部也会转为StringBuilder，但效率低下）
String result = "";
for (int i = 0; i < 10000; i++) {
    result += i;  // 每次迭代都创建一个新的StringBuilder对象
}

// 使用StringBuilder（更高效）
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append(i);  // 使用同一个StringBuilder对象
}
String result = sb.toString();  // 最后只创建一个String对象
```

当连接字符串很多时，两者性能差异可能是数量级的。

### 6. String类的hashCode()方法是如何实现的？

**答**：
String类的hashCode()方法基于字符串的内容计算哈希值，其基本实现如下：

```java
public int hashCode() {
    int h = hash;  // hash是缓存的哈希值
    if (h == 0 && value.length > 0) {
        for (int i = 0; i < value.length; i++) {
            h = 31 * h + value[i];
        }
        hash = h;  // 计算后缓存哈希值，因为String不可变，所以哈希值也不变
    }
    return h;
}
```

算法特点：
1. 使用31作为乘数（31是质数，且可以优化为位运算：`31*h = (h<<5)-h`）
2. 将每个字符的Unicode值计入哈希计算
3. 缓存计算结果，因为String不可变，所以哈希码一旦计算就不会改变
4. 空字符串的哈希值为0

这种实现方式在大多数情况下能够均匀分布哈希值，减少哈希冲突。

### 7. String s = new String("hello")创建了几个对象？

**答**：
这个语句可能创建一个或两个对象，取决于字符串常量池中是否已经存在"hello"：

1. 如果常量池中已经存在"hello"：
   - 只创建一个新对象，在堆内存中
   - s引用指向这个新对象

2. 如果常量池中不存在"hello"：
   - 首先，在常量池中创建"hello"对象
   - 然后，在堆内存中创建新对象，其内容指向常量池对象
   - s引用指向堆内存中的对象
   - 所以总共创建了两个对象

实际上，在编译时，字符串字面量"hello"会被加入到类的常量池中。当类被加载时，这个字面量会被放入运行时常量池。因此，在大多数情况下，"hello"已经在常量池中，所以只会创建一个新的堆对象。

### 8. 如何判断两个字符串是否相等？equals()和==有什么区别？

**答**：
在Java中判断两个字符串是否相等，应该使用equals()方法而不是==操作符。

1. **equals()方法**：
   - 比较的是字符串的内容（值）
   - String类重写了Object类的equals方法，比较每个字符是否相同
   - 适用于所有场景下的字符串内容比较

2. **==操作符**：
   - 比较的是对象的引用（内存地址）
   - 只有当两个引用指向同一个对象时返回true
   - 不适合比较内容，除非明确知道是同一对象

示例：
```java
String s1 = "hello";
String s2 = "hello";
String s3 = new String("hello");

System.out.println(s1.equals(s2));  // true，内容相同
System.out.println(s1.equals(s3));  // true，内容相同
System.out.println(s1 == s2);       // true，指向常量池中的同一个对象
System.out.println(s1 == s3);       // false，指向不同对象
```

另外，如果要进行不区分大小写的比较，可以使用`equalsIgnoreCase()`方法。

### 9. 字符串常量池的作用是什么？

**答**：
字符串常量池是Java方法区（Java 7之前）或堆内存（Java 7及之后）中的一个特殊存储区域，用于存储字符串字面量。

**主要作用**：

1. **节省内存**：允许相同内容的字符串在内存中只存储一次，避免重复创建
2. **提高性能**：字符串比较可以使用引用比较（==）而不是内容比较（equals）
3. **减少GC压力**：减少了重复字符串对象的创建，降低GC工作量

**工作原理**：

1. 当使用字面量创建字符串（如`String s = "abc"`）时，JVM首先检查常量池
2. 如果常量池中已存在该字符串，则返回其引用
3. 如果不存在，则在常量池中创建新字符串并返回引用

可以通过`intern()`方法手动将堆中的字符串添加到常量池中（或获取常量池中已有的引用）。

在Java 7之前，字符串常量池位于永久代；Java 7及之后，移到了堆内存中，这个变化使得intern()方法的行为和性能有所改变。

### 10. 如何高效地处理大量字符串连接？

**答**：
处理大量字符串连接的高效方法：

1. **使用StringBuilder或StringBuffer**：
   ```java
   StringBuilder sb = new StringBuilder();
   for (int i = 0; i < 10000; i++) {
       sb.append(someString);
   }
   String result = sb.toString();
   ```

2. **预估容量**：如果知道最终字符串的大致长度，初始化时指定容量，避免多次扩容
   ```java
   StringBuilder sb = new StringBuilder(10000); // 预分配空间
   ```

3. **使用StringJoiner（Java 8+）**：适合有分隔符的连接
   ```java
   StringJoiner joiner = new StringJoiner(", ");
   for (String item : items) {
       joiner.add(item);
   }
   String result = joiner.toString();
   ```

4. **使用String.join（Java 8+）**：适合简单连接
   ```java
   String result = String.join(", ", stringArray);
   ```

5. **使用Stream API连接（Java 8+）**：
   ```java
   String result = Stream.of("a", "b", "c")
       .collect(Collectors.joining(", "));
   ```

6. **在编译时连接字符串常量**：让编译器优化
   ```java
   String s = "Hello" + " " + "World"; // 编译器优化为 "Hello World"
   ```

7. **避免在循环中使用String连接**：这是最常见的性能陷阱
   ```java
   // 不好的做法
   String result = "";
   for (int i = 0; i < n; i++) {
       result += someString; // 每次循环创建新对象
   }
   ```

选择方法时，考虑线程安全需求（StringBuffer是线程安全的，StringBuilder不是）和具体场景。 