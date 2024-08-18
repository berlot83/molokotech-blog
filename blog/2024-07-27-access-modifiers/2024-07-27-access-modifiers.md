---
slug: access-modifiers
title: Access modifiers
authors: [axel]
tags: [Molokotech, docusaurus]
---
Access modifiers are implemented in java with four levels of abtraction.

**Improves**:
* Security
* Cleaner code
* Scalability
* Readability

__They are aplicable to__:
1) Classes → <font color="blue">*public*</font> | <font color="violet">*default*</font>
2) Interfaces → <font color="blue">*public*</font> | <font color="violet">*default*</font>
3) Constructors → <font color="blue">*public*</font> | <font color="violet">*default*</font> | <font color="grey">*protected*</font> | <font color="red">*private*</font>
4) Class member attributes and methods → <font color="blue">*public*</font> | <font color="violet">*default*</font> | <font color="grey">*protected*</font> | <font color="red">*private*</font>
5) Interface member attributes and methods → <font color="blue">*public*</font> | <font color="red">*private*</font>

**Level of visibility**:
* <font color="blue">public</font> → could be access from every pacakge
* <font color="violet">default</font> → inside the same package only (*no keyword*)
* <font color="grey">protected</font> → access from the same package and their sub classes
* <font color="red">private</font> → only inside the class 

**Default** → *refers at no reserve keyword just, it isn't the keyword of the example bellow because this refers to the type of member method*

**Classes** and **Interfaces** could be **public** or **default** (*no keyword*).

`Interfaces cannot have members with default or protected access modifiers, please remember that the default modifier it's not the keyword.`

**Real life example for access modifiers in an interface**:

```java
package com.molokotech.interfaces;

// Accesible from any package
public interface Loggueable {
	void log(); // implicitly public by default write public does not affect
	
	// private access modifier allowed but should have body
	private String colorConsole(String color) {
		switch(color) {
		case "yellow":
			return "WARN";
		case "red":
			return "ERROR";
		case "blue":
			return "INFO";
		default: 
			return "INFO";
		}
	};

	/* default methods cannot be private are always public or implicity public
	   every instance implementation should be access to it */ 
	default void labelColor(String color) {
		colorConsole(color);
	}
}

// Accesible with in the same package
interface AnotherLoggeable {
	
}
```

Member **attributes** and **methods** on the class can carry all types of modifiers. 

```java
public class AccessModifiers {
	
	public int n1;
	protected int n2;
	int n3;
	private int n4;	// accesible only somewhere inside the class

	public static void main(String[] args) {
		System.out.println("HOLA");
	}

	public AccessModifiers() {

	}
}

class Protected {
	protected Protected() {
		new Private(); // this NOT COMPILE at all! cannot access to the constructor outside the class
	}

}

class Default {
	Default() {
		new Protected();
	}
}

class Private {
	private Private() {
		new Default();
	}
}
```

It is important to note that some modifiers affects the overriding behavor.
