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

Future<String> fetchData() {
  return Future.delayed(Duration(seconds: 2), () => "Data Loaded");
}

void main() async {
  print("Loading.....");
  String result = await fetchData();
  print(result);
}
