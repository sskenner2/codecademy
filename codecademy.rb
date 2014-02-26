Banking on Ruby ##################

class Account
  attr_reader :name, :balance

  def initialize(name, balance=100)
    @name = name
    @balance = balance
  end

  def display_balance(pin_number)
    puts pin_number == pin ? "Balance: $#{@balance}." : pin_error
  end

  def withdraw(pin_number, amount)
    if pin_number == pin
      @balance -= amount
      puts "Withdrew #{amount}. New balance $#{@balance}."
    else
      puts pin_error
    end
  end

  private

  def pin
    @pin = 1234
  end

  def pin_error
    "Access denied: incorrect PIN."
  end

end

checking_account = Account.new('minz', 1_000_000)

#***********************************#

class Account
  attr_reader :name, :balance
  def initialize(name, balance=100)
    @name = name
    @balance = balance
  end

  def display_balance(pin_number)
    puts pin_number == pin ? "Balance: $#{@balance}." : pin_error
  end

  def withdraw(pin_number, amount)
    if pin_number == pin
      @balance -= amount
      puts "Withdrew #{amount}. New balance: $#{@balance}."
    else
      puts pin_error
    end
  end

  private

  def pin
    @pin = 1234
  end

  def pin_error
    "Access denied: incorrect PIN."
  end
end

my_account = Account.new("Eric", 1_000_000)
my_account.withdraw(11, 500_000)
my_account.display_balance(1234)
my_account.withdraw(1234, 500_000)
my_account.display_balance(1234)


OOP prt 2 ##################

module Languages
  FAVE = "Ruby"
end

class Master
  include Languages

  def initialize; end
  def victory
    puts FAVE
  end
end

total = Master.new
total.victory

class Application
  attr_accessor :status
  def initialize; end

  public

  def print_status
    puts "All systems go!"
  end

  private

  def password
    return 12345
  end
end

module ThePresent
  def now
    puts "It's #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}:#{Time.new.min} #{Time.new.hour > 12 ? 'PM' : 'AM'} (GMT)."
  end
end

class TheHereAnd
  extend ThePresent
end

TheHereAnd.now

module MartialArts
  def swordsman
    puts "I'm a swordsman."
  end
end

class Ninja
  include MartialArts
  def initialize(clan)
    @clan = clan
  end
end

class Samuri
  include MartialArts
  def initialize(shogun)
    @shogun = shogun
  end
end


module Action
  def jump
    @distance = rand(4) + 2
    puts "i jumped frwd #{@distance} ft!"
  end
end

class Rabbit
  include Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

class Cricket
  include Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

peter = Rabbit.new("peter")
jiminy = Cricket.new("jiminy")

peter.jump
jiminy.jump

require 'date'

puts Date.today

puts Math::PI

module My Library
  FAVE_BOOK = 'harry potter'
end

module Circle

  PI = 3.141592653589793

  def Circle.area(radius)
    PI * radius**2
  end

  def Circle.circumference(radius)
    2 * PI * radius
  end
end

class Person
  attr_reader :name
  attr_writer :job

  def initialize(name, job)
    @name = name
    @job = job
  end
end

class Dog
  def initialize(name, breed)
    @name = name
    @breed = breed
  end

  public

  def bark
    puts 'Woof!'
  end

  private

  def id
    @id_number = 12345
  end
end

class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  public #method can be called frm outside class

  def about_me
    puts "i'm #{@name} and i'm #{@age} yrs old!"
  end

  private #method cannot be called frm outside class

  def bank_account_number
    @account_number = 12345
    puts "my bank accnt number is #{@account_number}"
  end
end

eric = Person.new("eric", 26)
eric.about_me
eric.bank_account_number


OOP prt 1 ##################

class Computer
  @@users = {}

  def initialize(username, password)
    @username = username
    @password = password
    @files = {}
    @@users[username] = password
  end

  def create(filename)
    time = Time.now
    @files[filename] = time
    puts "#{filename} was created by #{@username} at #{time}"
  end

  def Computer.get_users
    @@users
  end
end

my_computer = Computer.new("me", 1234)
your_computer = Computer.new("you", 5678)

my_computer.create("task_list.txt")
your_computer.create("project_list.txt")

puts "users: #{Computer.get_users}"

class Message
  @@messages_sent = 0

  def initialize(from, to)
    @from = from
    @to = to
    @@messages_sent += 1
  end
end

class Email < Message
  def initialize(from, to)
    super
  end
end

my_message = Message.new('me', 'you')

class Creature
  def initialize(name)
    @name = name
  end
end

class Person
  def initialize(name)
    @name = name
  end
end

class Dragon < Creature; end
class Dragon < Person; end

class Creature
  def initialize(name)
    @name = name
  end

  def fight
    return "Punch to the chops!"
  end
end

class Dragon < Creature
  def fight
    puts "instead of breathing fire..."
    super
  end
end


class ApplicationError
  def display_error
    puts "Error! Error!"
  end
end

class SuperBadError < ApplicationError
end

err = SuperBadError.new
err.display_error

class Person
  @@people_count = 0

  def initialize(name)
    @name = name
    @@people_count += 1
  end

  def self.number_of_instances
    @@people_count
  end
end

matz = Person.new("Yukihiro")
dhh = Person.new("David")

puts "# of person instances: #{Person.number_of_instances}"

class MyClass
  $my_variable = "hello!"
end

puts $my_variable

class Person
  def initialize(name, age, profession)
    @name = name
    @age = age
    @profession = profession
  end

matz = Person.new("Yukihiro")

puts matz.current_person

(1..25).each do |i|
  m3 = i % 3 == 0
  m5 = i % 5 == 0

  puts case
    when (m3 and m5) then 'FizzBuzz'
    when m3 then 'Fizz'
    when m5 then 'Buzz'
    else i
  end
end
