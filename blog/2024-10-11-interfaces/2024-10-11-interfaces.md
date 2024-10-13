---
slug: Interfaces
title: Interfaces
authors: axel
tags: [molokotech]
---

![banner](./../../static/img/banner-java.jpg)

[sandbox.molokotech.com](https://docusaurus.io/docs/blog) are powered by the [Molokotech](http://web.molokotech.com/?lang=en).

#### Características:
* Todos sus métodos son públicos por defecto, pero luego de java 9 en adelante los mismos pueden ser definidos privados con body definido.
* Pueden contener atributos y métodos.
* Pueden extender de otras interfaces.
* Pueden todos sus atributos son abstractos.
* Sus atributos son finales por definición.
* Pueden contener atributos y métodos estáticos.
* Desde Java 8 en adelante pueden contener uno o más métodos default.

#### Ventajas:
* Las interfaces nos permiten definir contratos, que luego son implementados en una clase concreta.
* Las interfaces nos permiten aplicar con flexibilidad la abstracción y el polimorfismo.
* Una Clase puede implementar múltiples interfaces que a diferencia de herencia entre clases que sólo se puede heredar de una clase.
* Las interfaces pueden ayudarnos a tener un código más resumido con el uso de expresiones lambda.
* En función a interfaces pueden crearse instancias de clases anónimas para no depender de una implementación o clase particular previamente definida.

~~~java
// Concrete implementation
public class HiloConcreto implements Startable {

	@Override
	public void start() {
		System.out.println("HiloConcreto started");
	}

}

// Anonymous class
class MainAnonymous {
	public static void main(String[] args) {
		Startable s = new Startable() {
			
			@Override
			public void start() {
				System.out.println("Main started into anonymous class!!!");
			}

		};
		s.start();
	}
}

// Lambda expression
class MainLambdaExpression {
	public static void main(String[] args) {
		Startable s = () -> System.out.println("Main started into lambda expression!!!");
	 	s.start();
	}
}

interface Startable {
	void start();
}
~~~


#### Caracterísitcas de sus miembros:
* Los atributos son públic, estáticos y finales siempre.
* Los métodos pueden ser públicos por defecto o privados.
* Los métodos pueden ser abstractos o croncretos.
* Los métodos cuando son abstractos no pueden ser estático y vecebersa.
* El uso de un método default tiene sentido cuando en las implementaciónes no se sobreescribe el mismo.
* Las insterfaces pueden definir múltiples métodos default.
* Pueden definir múltiples métodos privados.
* El uso de métodos privados tiene sentido cuando internamente en la misma interface se invocan métodos.
* Como cualquier acceso estático se puede prescindir del nombre de la clase, a menos que exista una variable definida en el mismo método con lo cual el compilador prioriza la variable local y deja de apuntar a la estática. 

#### Ejemplo práctico de cada uso

El siguiente es un ejercicio, donde se trata de explicar cómo se pueden usar los miembros de la interface en forma práctica.

~~~java
public interface Streamable {

	/**
	 * 		Attributes -> only public
	 */

	// implicitly public static and final
	String letters = "abc";
	// Redundant static and access modifier
	public static String numbers = "123";

	/**
	 * 		Methods -> can be public or private
	 */

	// implicitly public and abstract
	void stream();

	// Redundant abstract and access modifier
	public abstract void streamRedundant();

	// Must've a body too
	private void privateInstanceLetterMethod() {
		letters = letters + "def"; 	// this will not compile!!!
		System.out.println(Streamable.letters);
	}

	// Belongs to the instance when the implementation did not override this one
	default void defaultLettersBehaivor() {
		privateInstanceLetterMethod();
	}
	
	// Belongs to the instance when the implementation did not override this one
	default void defaultNumbersBehaivor() {
		Streamable.privatEstaticMethod("678");
	}

	// Belongs to the class and must've a body too
	private static void privatEstaticMethod(String numbers) {
		numbers = numbers + "456";	// this will compile OK!!!
		System.out.println(Streamable.numbers);
	}

}
~~~

:::tip
Desde Java 8 en adelante se habilitó el uso de expresiones lambda ampliamente utilizadas en programación funcional, la que mejora notablemente la lectura del código y limita la cantidad de líneas de código haciendo una lectura de los códigos fuente más legible.
:::