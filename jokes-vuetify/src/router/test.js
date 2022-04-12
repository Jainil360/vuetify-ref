let nonPrimitiveValue = {'fName': 'Kushal'};

function ReferenceTestNonPrimitive(object) {
  object['Iname'] = 'as'
  return object;
}

const result = ReferenceTestNonPrimitive(nonPrimitiveValue);
console.log(nonPrimitiveValue === result);