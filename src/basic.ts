function greeter (person: string): string {
  return 'Hello, ' + person
}
let user = 'Jane User'

let a: [number, string]

a = [2, 's']

enum Age {Red, Green, Blue}
let p: Age = Age.Green

enum Color {Red= 'red', Green= 'green', Blue= 'blue'}
let c: Color = Color.Green
console.log(c)

document.body.innerHTML = greeter(user)
