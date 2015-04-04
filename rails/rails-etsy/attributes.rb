class Person

  def initialize(name, age)
    @name = name
    @age = age
  end

  def intro
    puts "My name is #{@name} and I am #{@age} years old"
  end

end

person1 = Person.new("Lupe", 8)
person1.intro



class Dog

  def initialize(name, color)
    @name = name
    @color = color
  end

  def describe
    puts "My name is #{@name} and I am #{@color}"
  end

end

dog1 = Dog.new("Rover", "beige")
dog1.describe
