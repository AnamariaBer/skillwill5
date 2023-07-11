function sumAndProduct(arr) {
    if (arr.length < 3 || arr.some(num => num % 2 === 0)) {
      return null;
    }
  
    let sum = arr[0] + arr[1];
    let product = 1;
  
    for (let i = 2; i < arr.length; i++) {
      product *= arr[i];
    }
  
    return [sum, product];
  }

  const arr = [3, 5, 7, 9, 11];
const result = sumAndProduct(arr);
console.log(result);


function getCityFromUser(user) {
    const { banks } = user;
    if (banks && banks.length > 2 && banks[2].address) {
      const { city } = banks[2].address;
      return city;
    }
    return undefined;
  }


  const user = {
    name: 'Anamaria',
    age: 15,
    banks: [
      { name: 'Bank1', address: { city: 'New York' } },
      { name: 'Bank2', address: { city: 'London' } },
      { name: 'Bank3', address: { city: 'Paris' } }
    ]
  };
  
  const city = getCityFromUser(user);
  console.log(city); 



function copyObject(obj) {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
     
      newObj[key] = copyObject(value);
    } else {
      
      newObj[key] = value;
    }
  }
  return newObj;
}


const obj = {
    name: 'Anamaria',
    age: 15,
    address: {
      street: '234 xxx street',
      city: 'Batumi',
      country: 'Georgias'
    }
  };
  
  const newObj = copyObject(obj);
  console.log(newObj);