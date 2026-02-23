// mixin Swimmer {
//   void swim() {
//     print("Swimming");
//   }
// }
// mixin Runner {
//   void run() {
//     print("Running");
//   }
// }

// class Athlete with Swimmer, Runner {}

// void main() {
//   Athlete athlete = Athlete();
//   athlete.swim();
//   athlete.run();
// }

// Future<String> fetchData() {
//   return Future.delayed(Duration(seconds: 2), () => "Data Loaded");
// }

// void main() async {
//   print("Loading.....");
//   String result = await fetchData();
//   print(result);
// }

// Create a Vehicle Class inherit a Car class that adds a property like model or speed
//Write a method that prints basic vehicle info and car info

class Vehicle {
  String brand;

  Vehicle(this.brand);

  void printInfo() {
    print("Vehicle Brand: $brand");
  }
}

class Car extends Vehicle {
  String model;
  int speed;

  Car(String brand, this.model, this.speed) : super(brand);

  @override
  void printInfo() {
    super.printInfo();
    print("Car Model: $model");
    print("Car Speed: $speed km/h");
  }
}

void main() {
  Car myCar = Car("Toyota", "Corolla", 180);
  myCar.printInfo();
}
