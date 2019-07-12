// function task1_1(a){
// 	let b = a % 10;
// 	a = parseInt(a/10);
// 	if(b !== a){
// 		return false;
// 	}
// 	return true;
// }

// function task1_2(a){
// 	let b = a % 10;
// 	a = parseInt(a/10);
// 	let c = a % 10;
// 	a = parseInt(a/10);
// 	if(b !== a || b !== c || a !== c){
// 			return false;
// 	}
// 	return true;
// }

function task1_3(a) {
	a = a.toString();
    return a == a.split('').reverse().join('');
}
console.log(task1_3(333));
// function task1_4(a) {
// 	a = a.toString();
// 	a = a.split('');
// 	for(let i = 0; i <= a.length; ++i)
// 	{
// 		for(let j = i + 1; j <= a.length; ++j){
// 			if(a[i] == a[j]){
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }
  
// function task1_5(a,k) {
// 	a = a.toString();
// 	a = a.split('');
// 	let temp = 1;
// 	let max = 0;
// 	for(let i = 0; i <= a.length; ++i)
// 	{
// 		for(let j = i + 1; j <= a.length; ++j){
// 			if(a[i] == a[j]){
// 				++temp;
// 			}
// 		}
// 		if(temp > max){
// 			max = temp;
// 		}
// 		temp = 0;
// 	}
// 	if(max == k){
// 		return true;	
// 	}
// 	return false;
// }
  
// function task1_6(a) {
// 	a = a.toString();
// 	a = a.split('');
// 	for(let i = 0; i <= a.length; ++i)
// 	{
// 		for(let j = i + 1; j <= a.length; ++j){
// 			if(a[i] == a[j]){
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }

// function task1_7(a) {
// 	a = a.toString();
// 	a = a.split('');
// 	let temp = 1;
// 	let max = 0;
// 	for(let i = 0; i <= a.length; ++i)
// 	{
// 		for(let j = i + 1; j <= a.length; ++j){
// 			if(a[i] == a[j]){
// 				++temp;
// 			}
// 		}
// 		if(temp <= max){
// 			return false;
// 		}
// 		else{
// 			max = temp;
// 		}
// 		temp = 0;
// 	}
// 	if(max == 2){
// 		return true;	
// 	}
// 	return false;
// }

// function task1_8(a,k){
// 	a = a.toString();
// 	a = a.split(' ');
// 	let temp = 1;
// 	let max = 0;
// 	for(let i = 0; i <= a.length; ++i)
// 	{
// 		for(let j = i + 1; j <= a.length; ++j){
// 			if(a[i] == a[j]){
// 				++temp;
// 			}
// 		}
// 		if(temp > max){
// 			max = temp;
// 		}
// 		temp = 0;
// 	}
// 	if(max > k){
// 		return true;	
// 	}
// 	return false;
// }

// function task1_9(a,k){
// 	let sumF = 0;
// 	let sumL = 0;
// 	let arr = [];
// 	for(let i = 0; a; ++i){
// 		arr[i] = a%10;
// 		a = parseInt(a/10);
// 	}
// 	sumL = sumOf(arr, k);
// 	sumF = sumOf(arr, -k);
// 	return [sumF,sumL];
// }

// function task1_10(a,k){
// 	a = a.toString();
// 	a = a.split(' ');
// 	let temp = 1;
// 	let max = 0;
// 	for(let i = 0; i <= a.length; ++i)
// 	{
// 		for(let j = i + 1; j <= a.length; ++j){
// 			if(a[i] == a[j]){
// 				++temp;
// 			}
// 		}
// 		if(temp > max){
// 			max = temp;
// 		}
// 		temp = 0;
// 	}
// 	if(max > k){
// 		return true;	
// 	}
// 	return false;
// }

// function task1_11(a,k,m){
// 	let count = 0;
// 	let arr = [];
// 	for(let i = 0; a; ++i){
// 		arr[i] = a%10;
// 		a = parseInt(a/10);
// 	}
// 	for(let i = 0; i < arr.length; ++i){
// 		if(arr[i] < m){
// 			++count
// 		}
// 	}
// 	if(count === k){
// 		return true;
// 	}
// 	return false;
// }

// function task1_12(a,k){
// 	let count = 0;
// 	let arr = [];
// 	let sum = 0;
// 	for(let i = 0; a; ++i){
// 		arr[i] = a%10;
// 		a = parseInt(a/10);
// 	}
// 	for(let i = arr.length - 1; i > arr.length - 3; --i){
// 		sum += arr[i];
// 		console.log(sum);
// 	}
// 	for(let i = 0; i < arr.length; ++i){
// 		if(arr[i] > sum){
// 			++count
// 		}
// 	}
// 	if(count === k){
// 		return true;
// 	}
// 	return false;
// }

// function task2_1(a){
// 	a = a.toString();
// 	a = a.split('');
// 	let temp = 0;
// 	for(let i = a.length; a[i] != '.'; --i){
// 		if(a[i] == 9){
// 			++temp;
// 		}
// 	}
// 	return temp;
// }

// function task2_2(a, k){
// 	a = a.toString();
// 	a = a.split('');
// 	let temp = 0;
// 	for(let i = a.length-1; i > a.length - k - 1; --i){
// 		temp += Number(a[i]);
// 	}
// 	return temp;
// }

// function task2_3(a, k){
// 	a = a.toString();
// 	a = a.split('');
// 	let temp = 0;
// 	for(let i = a.length-1; a[i] != '.'; --i){
// 		temp += Number(a[i]);
// 	}
// 	if(temp === k){
// 		return true;
// 	}
// 	return false;
// }

// function task2_4(a, k, n){
// 	xz
// }
// function task2_5(a, k, n){
// 	xz
// }

// function task2_6(a, k, n){
// 	a = a.toString();
// 	a = a.split('');
// 	for(var j = 0; a[j] != '.'; ++j){	
// 	}
// 	a = a.slice(j + 1);
// 	var pred = n;
// 	let temp = 0;
// 	for(let i = a.findIndex((i)=>{return i === pred.toString()}) ; i < k || i == a.length - 1; ++i){
// 		temp += Number(a[i]);
// 	}
// 	return temp;
// }

// function task2_7(a){
// 	a = a.toString();
// 	a = a.split('');
// 	let sum = 0;
// 	let sum1 = 0;
// 	for(var j = 0; a[j] != '.'; ++j){	
// 		sum += Number(a[j]);
// 	}
// 	a = a.slice(j + 1);
// 	sum1 = sumOf(a,a.length);
// 	if(sum === sum1){
// 		return true;
// 	}
// 	return false;
// }

// function task2_8(a, k){
// 	a = a.toString();
// 	a = a.split('');
// 	var pred = k;
// 	for(var j = 0; a[j] != '.'; ++j){	
// 	}
// 	a = a.slice(j + 1);
// 	a = a.slice(a.findIndex((i)=>{return i === pred.toString()}) + 1);
// 	return a;
// }

// function task2_9(a, k){
// 	a = a.toString();
// 	a = a.split('');
// 	for(var j = 0; a[j] != '.'; ++j){	
// 	}
// 	a = a.slice(j + 1);
// 	a = a.slice(0, a.length - k);
// 	for(let i = 0; i < a.length; ++i){
// 		for(let j = i + 1; j < a.length-1; ++j){
// 			if(a[j] === a[i]){
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }

// function task2_10(a, k){
// 	a = a.toString();
// 	a = a.split('');
// 	var temp = 0;
// 	for(var j = 0; a[j] != '.'; ++j){	
// 	}
// 	a = a.slice(j + 1);
// 	a = a.slice(0, k);
// 	for(let i = 0; i < a.length; ++i){
// 		for(var g = i + 1; g < a.length-1; ++g){
// 			if(a[g] === a[i]){
// 				++temp;
// 			}
// 		}
// 	}
// 	console.log(a);
// 	if(g + 1 == temp){
// 		return true;
// 	}
// 	return false;
// }

// function task2_11(a, k){
// 	xz
// }

// function task2_12(a, k){
// 	a = a.toString();
// 	a = a.split('');
// 	let temp = 0;
// 	for(var j = 0; a[j] != '.'; ++j){	
// 	}
// 	a = a.slice(j + 1);
// 	a = a.slice(0, k);
// 	temp = Number(a[1] - a[0]);
// 	for(let i = 1; i < a.length-1; ++i){
// 		if(Number(a[i]) != Number(a[i-1]) + temp){
// 			return false
// 		}
// 	}
// 	return true;
// }

// function task3_1(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		sum += n*Math.pow(j,2*n);
// 	}
// 	return sum + 10;
// }

// function task3_2(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.5, --n, ++i){
// 		sum += n*Math.pow(j,2*n - 1);
// 	}
// 	return sum + 5;
// }

// function task3_3(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		console.log(sum + " " + n + " " + j + " " + Math.pow(j,2*n));
// 		sum += n*Math.pow(2*j,2*n);
// 	}
// 	return sum + 10;
// }

// function task3_4(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.5, --n, ++i){
// 		sum += n*Math.pow(2*j - 1,2*n - 1);
// 	}
// 	return sum + 10;
// }

// function task3_5(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.5, --n, ++i){
// 		sum += Math.pow(-1, n) n*Math.pow(j,2*n - 1);
// 	}
// 	return sum + 5;
// }

// function task3_6(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		console.log(sum + " " + n + " " + j + " " + Math.pow(j,2*n));
// 		sum += Math.pow(-1, n + 1) * 2*n*Math.pow(j,2*n);
// 	}
// 	return sum + 10;
// }

// function task3_7(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		sum += Math.pow(-1, n + 1) *(2*n - 1)*Math.pow(j,2*n - 1);
// 	}
// 	return sum + 10;
// }

// function task3_8(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		console.log(sum + " " + n + " " + j + " " + Math.pow(j,2*n));
// 		sum += Math.pow(-1, n) * n*Math.pow(j,2*n);
// 	}
// 	return sum + 6;
// }

// function task3_9(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		sum += (2*n - 1) * Math.pow(j,2*n);
// 	}
// 	return sum + 10;
// }

// function task3_10(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		sum += 2 * n * Math.pow( j, 2 * n - 1);
// 	}
// 	return sum + 5;
// }

// function task3_11(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		sum += Math.pow(-1, n) * n * Math.pow(j,n);
// 	}
// 	return sum;
// }

// function task3_12(n){
// 	let sum = 0;
// 	let i = 0;
// 	for(let j = 1; n >= 1; j = 1 + i * 0.25, --n, ++i){
// 		sum += Math.pow(-1, n) * 2 * n * Math.pow(j, n);
// 	}
// 	return sum + 1;
// }

// function task4_1(){
// 	let arr = [];
// 	for(let i = 0; i < 10; ++i){
// 		for(let j = 0; j < 10; ++j){
// 			if((3 * i + 5 * j) > 7){
// 				arr.push([i, j]);
// 			}
// 		}
// 	}
// 	return arr;
// }

// function task4_2(n,m){
// 	let arr = [];
// 	for(let i = n; i < m; ++i){
// 		if(isPalindrome(convertToString(Math.pow(i,2)))){
// 			arr.push(i);
// 		}
// 	}

// 	return arr;
// }

// function task4_3(n,m){
// 	let arr = [];
// 	for(let i = n; i < m; ++i){
// 		if(isPalindrome(convertToString(i))){
// 			if(isPalindrome(convertToString(Math.pow(i,2)))){
// 				arr.push(i);
// 			}
// 		}
// 	}

// 	return arr;
// }

// function task4_4(n){
// 	let arr = [];
// 	let fac = 1;
// 	for(let i = 1; i <= n; ++i){
// 		fac *= i;
// 	}
// 	for(let j = 0; j < fac; ++j){
// 		if((j*(j+1)*(j+2)) == fac){
// 			return [true,j,j+1,j+2];
// 		}
// 	}
// 	return false;
// }

// function task4_5(n){
// 	xz
// }

// function task4_6(n){
// 	xz
// }

// function task4_7(a,b){
// 	let gcd = greatestCommonDivisor(a,b);
// 	return [a/gcd, b/gcd];
// }

// function task4_8(n){
// 	xz
// }

// function task4_9(){
// 	let arr = [];
// 	let temp = [];
// 	for(let i = 10; i <= 9999; ++i){
// 		temp = numberMaker(i);
// 			switch(temp.length){

// 				case 2:

// 					if(Math.pow(temp[0], temp.length) + Math.pow(temp[1], temp.length) == i){
// 						arr.push(i);
// 					}

// 				break

// 				case 3:

// 					if(Math.pow(temp[0], temp.length) + Math.pow(temp[1], temp.length) + Math.pow(temp[2], temp.length) == i){
// 						arr.push(i);
// 					}

// 				break

// 				case 4:
// 					if(Math.pow(temp[0], temp.length) + Math.pow(temp[1], temp.length) + Math.pow(temp[2], temp.length) + Math.pow(temp[3], temp.length) == i){
// 						arr.push(i);
// 					}

// 				break
// 		}
// 	}
// 	return arr;
// }


// function task4_10(n){
// 	let res = 0;
// 	for(let i = 0; i < n; ++i){
// 		if(i % 5 == 0){
// 			if(parseInt(i/5)%5 == 0){
// 				++res;
// 			}
// 			++res;
// 		}
// 	}
// 	return res;
// }

// function task4_11(a,b){
// 	let res = [];
// 	let temp = 0;
// 	for(let i = 1; i < a; ++i){
// 		for(let j = 1; j < b; ++j){
// 			temp = greatestCommonDivisor(i,j);
// 			res.push([i/temp, j/temp]);
// 		}
// 	}
// 	return res;
// }

// function task4_12(a){
// 	let res = [];
// 	for(let i = 1; i < a;++i){
// 		res.push(Math.pow(2,i) - 1);
// 	}
// 	return res;
// }

// function task5_1(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i) * Math.pow(x, 2 * i - 1)) / (facktoreal(i) * (2 * i + 1));
// 	}
// 	return res;
// }

// function task5_2(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i) * Math.pow(x, 4 * i - 3)) / (facktoreal(2*i+1) * (4 * i + 3));
// 	}
// 	return res;
// }

// function task5_3(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i) * Math.pow(x, 2 * i + 1)) / (facktoreal(2*i) * (4 * i + 1));
// 	}
// 	return res;
// }

// function task5_4(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += ((Math.pow(-1,i) / (facktoreal(i) * facktoreal(i + 1)) * Math.pow(x/2,2*i+1));
// 	}
// 	return res;
// }

// function task5_5(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += ((Math.pow(-1,i) / (facktoreal(2*i))) * Math.pow(x/3, 4 * i));
// 	}
// 	return res;
// }

// function task5_6(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i + 1) * Math.pow(x, 2 * i - 1)) / (facktoreal(2*i - 1) * (2 * i + 1));
// 	}
// 	return res;
// }

// function task5_7(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i) * Math.pow(x, 2 * i)) / (facktoreal(i) * Math.pow(2,i));
// 	}
// 	return res;
// }

// function task5_8(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i) / Math.pow((facktoreal(i + 1), 2)) * Math.pow(x/2, 2 * (i - 1)));
// 	}
// 	return res;
// }

// function task5_9(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i + 1) * Math.pow(x, 2 * i - 1)) / (facktoreal(2 * i + 1));
// 	}
// 	return res;
// }

// function task5_10(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i) * Math.pow(x, 2 + i)) / (facktoreal(i + 2) * (i + 1));
// 	}
// 	return res;
// }

// function task5_11(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i) * Math.pow(x,i)) * (i + 1) / (facktoreal(2 * i - 1) * Math.pow(3,i);
// 	}
// 	return res;
// }

// function task5_12(x, a){
// 	let res = 0;
// 	if(x < 0 || x > 1){
// 		return false;
// 	}
// 	for(let i = 1; i < a;++i){
// 		res += (Math.pow(-1,i) * Math.pow(x, 2 * i + a)) / (facktoreal(i + a) * facktoreal(i));
// 	}
// 	return res;
// }

function task6_1(n){
	let arr = [];
	for(let i = 2; i < n; ++i){
		if(parseInt(n%i) == 0 && isPrime(i)){
			arr.push(i);
		}
	}
	return arr;
}

// function task6_2(a,b){
// 	let arr = [];
// 	for(let i = a; i < b; ++i){
// 		if(isPrime(i)){
// 			i = i.toString().split('').reverse().join('');
// 			if(isPrime(Number(i))){
// 				arr.push(i);
// 			}
// 		}
// 	}
// 	return arr;
// }

// function task6_3(a){
// 	let arr = [];
// 	let res = [];
// 	for(let i = 2; i < a; ++i){
// 		if(isPrime(i)){
// 			arr.push(i);
// 		}
// 	}
// 	while(a !== 1){
// 		for(let j = arr.length; j>=-1; --j){
// 			if(a%arr[j] == 0){
// 				a /= arr[j];
// 				res.push(arr[j]);
// 			}
// 			if(j == -1 && res.length == 0){
// 				return a;
// 			}
// 		}
// 	}
// 	return res;
// }

// function task6_4(a){
// 	let arr = [];
// 	let res = [];
//  	for(let i = a; i < a * 2; ++i){
//  		if(isPrime(i)){
//  			arr.push(i);
//  		}
//  	}
//  	for(let i = 0; i < arr.length; ++i){
//  		for(let j = 0; j < arr.length; ++j){
//  			if(arr[i]-arr[j] == 2){
//  				res.push({first: arr[i]},{second: arr[j]});
//  			}
//  		}
//  	}
// 	return res;
// }

// function task6_5(a){
// 	xz
// }

// function task6_6(a){
// 	let arr = [];
// 	let res = [];
// 	arr = primeNumber(arr);
// 	for(let i = 0; res.length <= a; ++i){
// 		if(res.length < a){
// 			arr = primeNumber(arr);
// 		}
//  		if(isPrime(i)){
//  			res.push(arr[i]);
//  		}
//  	}
// 	return res[a];
// }

// function task6_7(n,m){
// 	let arr = [];
// 	let res = [];
// 	arr = primeNumber(arr);
// 	for(let i = 0; res.length <= n; ++i){
// 		if(res.length < n){
// 			arr = primeNumber(arr);
// 		}
// 		if(sumOf(convertToString(arr[i]).split(''), convertToString(arr[i]).split('').length) < m && arr[i] != 1){
//  			res.push(arr[i]);
//  		}
//  	}
// 	return res;
// }

// function task6_8(){
// 	let arr = [];
// 	let res = [];
// 	let temp = 0;
// 	for(let i = 1000; i <= 9999; ++i){
// 		if(isPrime(i)){
// 			arr.push(i)
// 		}
//  	}
//  	for(let i = 0; i < arr.length; ++i){
//  		temp = convertToString(arr[i]).split('');
//  		if(temp[0]+temp[1] == temp[2] + temp[3]){
//  			res.push(temp.join(''));
//  		}
//  	}
// 	return res;
// }

// function task6_9(){
// 	xz
// }

// function task6_10(){
// 	xz
// }

// function task6_11(n,k){
// 	let arr = [];
// 	let prime = [];
// 	let num = [];
// 	let res = [];
// 	for(let i = n; i <= k; ++i){
// 		arr.push(task6_1(i));
// 		num.push(i);
//  	}
//  	for(let i = 2; i < n*k; ++i){
//  		if(isPrime(i)){
//  			prime.push(i);
//  		}
//  	}
//  	for(let i = 0, j = 1; j < prime.length; ++i, ++j){
//  		for(let g = 0; g < arr.length; ++g){
//  			console.log(prime[i]*prime[j]);
//  		if(prime[i]*prime[j] === arr[g].length){
//  			res.push({number: num[g]},{primeDiv: arr[g]});
//  		}
//  		}
//  	}
// 	return res;
// }

// function task6_12(n){
// 	let maxPow = 2;
// 	let maxPrimeNum = 2;
// 	let res = 0
// 	for(let i = 2; i < n; ++i){
// 		if(Math.pow(2,i) <= n){
// 			maxPow = Math.pow(2,i);
// 		}
//  	}
//  	for(let i = maxPow; !isPrime(i); --i){
//  		res = i - 1;
//  	}
// 	return max;
// }

// function task7_1(arr){
// 	let temp = 1;
// 	let max = 1;
// 	for(let i = 0; i < arr.length-1; ++i){
// 		if(arr[i] > arr[i + 1]){
// 			++temp;
//			if(max < temp){
// 				max = temp;
// 			}
// 		}
// 		else{
// 			temp = 1;
// 		}
//  	}
// 	return temp;
// }

// function task7_2(arr){
// 	let temp = 1;
// 	for(let i = 0; i < arr.length-1; ++i){
// 		if(arr[i] < arr[i + 1]){
// 			++temp;
//			if(max < temp){
	// 			max = temp;
	// 		}
// 		}
// 		else{
// 			temp = 1;
// 		}
//  	}
// 	return max;
// }

// function task7_3(arr){
// 	let temp = 1;
// 	let max = 1;
// 	let d = arr[1] - arr[0];
// 	for(let i = 0; i <= arr.length-1; ++i){
// 		if(arr[i] + d == arr[i + 1]){
// 			++temp;
// 			if(max < temp){
// 				max = temp;
// 			}
// 		}
// 		else{
// 			temp = 2;
// 			d = arr[i + 1] - arr[i];
// 		}
//  	}
// 	return max;
// }

// function task7_4(arr){
// 	let temp = 1;
// 	let max = 1;
// 	for(let i = 0; i <= arr.length-1; ++i){
// 		if(testPow(arr[i])){
// 			++temp;
// 			if(max < temp){
// 				max = temp;
// 			}
// 		}
// 		else{
// 			temp = 0;
// 		}
// 	}
// 	return max;
// }

// function task7_5(arr){
// 	let temp = 0;
// 	let fib = fibonacci(arr.length);
// 	let max = 1;
// 	for(let i = 0; i <= arr.length-1; ++i){
// 		if(arr[i] === fib[i]){
// 			++temp;
// 			if(max < temp){
// 				max = temp;
// 			}
// 		}
// 		else{
// 			temp = 0;
// 		}
// 	}
// 	return max;
// }

// function task7_6(arr){
// 	let temp = 0;
// 	let powTwo = [];
// 	for(let j = 0; j < arr.length*2; ++j){
// 		powTwo.push(Math.pow(2,j));
// 	}
// 	let max = 1;
	
// 	for(var i = 0; i <= arr.length-1; ++i){
// 		if((powTwo.findIndex((j)=>{return j == arr[i]}) !== -1)){
// 			++temp;
// 			if(max < temp){
// 				max = temp;
// 			}
// 		}
// 		else{
// 			temp = 0;
// 		}
// 	}
// 	return max;
// }

// function task7_7(arr){
// 	xz
// }

// function task7_8(arr){
// 	xz
// }

// function task7_9(arr){
// 	xz
// }

// function task7_10(arr){
// 	xz
// }

// function task7_11(arr){
// 	xz
// }

// function task7_11(arr){
// 	xz
// }


//console.log(task7_8([2,4,8,6,8,8,8,8]));

function sumOf(arr, k){
	let sum = 0;
	if(k < 0){
		for(let i = arr.length - 1; i > arr.length - Math.abs(k) - 1; --i){
		sum = arr[i] + sum;
	}
	return sum;
	}
	else{
	for(let i = 0; i < k; ++i){
		sum = Number(arr[i]) + sum;
	}
	}
	return sum;
}

function isPalindrome(a) {
    return a == a.split('').reverse().join('');
}

function convertToString(a){
	a = a.toString();
	a = a.split(' ');
	return String(a);
}

function greatestCommonDivisor(a, b){
  var divisor = 2, 
      greatestDivisor = 1;
  if (a < 2 || b < 2)
     return 1;
  while(a >= divisor && b >= divisor){
   if(a % divisor == 0 && b % divisor == 0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}

function numberMaker(a){
	let arr = [];
	while(a){
		arr.push(a%10);
		a = parseInt(a/10);
	}
	return arr.reverse();
}

function selectionSort(arr,firstIndex, lastIndex)
{
	let index;
	for(let i = firstIndex; i != lastIndex; ++i)
	{
		index = i;
		for(let j = i+1; j != lastIndex; ++j)
		{
			if(arr[j] < arr[index])
			{
				index = j;
			}

		}
		if(arr[i] > arr[index])
		{
			[arr[i],arr[index]] = [arr[index], arr[i]];
		}
		
	}

}

function facktoreal(a){
	let res = 1;
	for(let i = 1; i <= a; ++i){
		res *= i;
	}
	return res;
}

function isPrime(n){
  let divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}

function primeNumber(a){
	for(let i = a.length+1; i < a.length+100; ++i){
		if(isPrime(i)){
			a.push(i);
		}
	}
	return a;
}

function testPow(a){
	for(let i = 0; i < a; ++i){
		if(Math.pow(i,2) == a){
			return true;
		}
	}
	return false;
}

function fibonacci(n){
  let fibo = [0, 1];
  
  if (n <= 2) return 1;

  for (let i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo;
} 