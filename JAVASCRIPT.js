let arr=[22,11,66,33,44,55,99,77,88];
let dup=[1,2,3,4,5,6,7,8,9,0,1,4,6,8,9,3,4,5];
function display(){
    document.write(arr+"<br>");
} //1

function manipulate(){
    display();
    arr.push(200);
    document.write("After push(200): "+arr);
    arr.unshift();
    document.write("<br>After unshift(): "+arr);
    arr.shift();
    document.write("<br>After shift(): "+arr);
    arr.pop();
    document.write("<br>After pop(): "+arr);
}//2

function search(){
    display();
    document.write("Index Of (55): "+arr.indexOf(55));
    document.write("<br>find(33): "+arr.find((x)=>x==33));
    document.write("<br> Include(55):"+arr.includes(55));
}//3

function arrayfilter(){
    display();
    document.write("After Filtering: "+arr.filter((x)=>x%3==0));
}//4

function mapping(){
    display();
    document.write("After Mapping: "+arr.map((x)=>x*2));
}//5

function sorting(){
    document.write("After sort :"+arr.sort());
}//6

function join_and_split(){
    document.write("After Join: "+d);
    document.write("After split: "+s);
}//7

function Min_Max(){
    let max=0;
    let min=1000;
    display();
    for(let j=0;j<arr.length;j++){
        if(arr[j]>max){
            max=arr[j];
        }
        if(arr[j]<min){
            min=arr[j];
        }
    }
    document.write("MAX: "+max+"  MIN: "+min);
}//8

function arraywithlenght(){
    document.write("");
}//9

function De_dupilicate(){
    let set = new Set(dup);
    for(let i=0;i<dup.length;i++){
        set.add(dup[i]);
    }
    document.write("After De_dupilicating: "+set.length);
}//10