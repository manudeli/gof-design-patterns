import { AverageVisitor, Item, ItemList, SumVisitor } from './models'

const list1 = new ItemList()
list1.add(new Item(10))
list1.add(new Item(20))
list1.add(new Item(40))

const list2 = new ItemList()
list2.add(new Item(30))
list2.add(new Item(40))
list2.add(list1)

const list3 = new ItemList()
list3.add(new Item(25))
list3.add(new Item(20))
list3.add(list2)

const sum = new SumVisitor()
const average = new AverageVisitor()
list3.accept(sum)
list3.accept(average)
console.log(average.getValue())
console.log(sum.getValue())
