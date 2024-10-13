---
slug: anonymous-clases
title: Anonymous Classes
authors: [axel]
tags: [java, spring-boot]
---


![banner](./../../static/img/banner-java.jpg)

[sandbox.molokotech.com](https://docusaurus.io/docs/blog) are powered by the [Molokotech](http://web.molokotech.com/?lang=en).

Las clases anónimas son sólo objetos que se instancian en función a una interface, una clase abstracta o una clase concreta que permite definir una clase conreta dentro de una instancia y sólo dentro de la misma, de esta forma no es necesario crear toda una clase nueva para un comportamiento custom.

#### Ejemplo
* Abajo una clase anónima en función de Car que retorna un String
* Debajo una clase que hereda la clase Car.

~~~java
import java.time.LocalDateTime;

public class CustomCar {
	public static void main(String[] args) {
		// We define a custom class from another one that only going to live inside myCustomCar 
		String messageFromCustomCar = new Car() {
			
			// Custom attribute
			String brand = "Chevrolet";
			
			// This method is useless but it is needed to override
			@Override
			void startedTime() {
				System.out.println("started ON second: " + LocalDateTime.now().getSecond());
			}
			
			// Custom method
			String getMessage() {
				return "Do you like my " + brand + " custom Car?";
			}
			
		}.getMessage();
		
		// We only print getMessage()
		System.out.println(messageFromCustomCar);
		
	}
}

// Classic extension 
class Peugeot extends Car {
	@Override
	void startedTime() {
		System.out.println("Started ON pretty fast");
	}
}

// Could be an Interface, a concrete class or an abstract class
abstract class Car {
	abstract void startedTime();
}
~~~

#### Cuándo y dónde utilizarla
1) Utilizar una definición en un punto en particular para no tener que definir toda una clase completa para evitar tener clases definidas que no vas a reutilizar.
2) Tener exactamente la implementación justo donde se use por ejemplo en aquellos parámetros que son interfaces.
3) Acceder a miembros de la clase que existen en la clase custom.

~~~java

public class CustomCar {
	
	public static void main(String[] args) {
		// In this case Runnable is an Interface
		new Thread(new Runnable() {
			@Override
			public void run() {
				System.out.println("Just in the exact place");
			}
		});
	}
	
}

~~~

:::tip
Hoy en día se utilizan menos las clases anónimas ya que aprarecieron las expresiones lambda, sin embargo las mismas tienen la desventaja que sólo pueden ser definidas si:
1) De donde se crean es una interface.
2) Si sólo tiene un método abstracto que no sea los que vienen de la clase Object.
:::


<!-- truncate -->