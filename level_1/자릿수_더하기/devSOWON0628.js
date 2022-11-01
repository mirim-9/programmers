function solution(n)
{
    return (n.toString().split("").map((x)=> (Number(x)))).reduce(function add(sum, currValue) {
              return sum + currValue;
            }, 0);
}
