let args=process.argv;
let arr=args.slice(3),valid=true;

for(let i=1;i<arr.length;i++)
{
    if(isNaN(arr[i]))
    {
        valid=false;
        console.log("Enter only numbers as input");
        break;
    }
}

if(valid===true)
{

    if(arr.length>=3)
    {

        if(arr[0]==="addition")
        {
            process.stdout.write("Sum is ");
            arr=arr.slice(1);
            console.log(arr.reduce((a,b) => (Number(a)+Number(b))));
        }

        else if(arr[0]==="subtraction")
        {
            process.stdout.write("Difference is ");
            arr=arr.slice(1);
            console.log(arr.reduce((a,b) => (Number(a)-Number(b))));
        }

        else if(arr[0]==="multiply")
        {
            process.stdout.write("Product is ");
            arr=arr.slice(1);
            console.log(arr.reduce((a,b) => (Number(a)*Number(b))));
        }

        else if(arr[0]==="division")
        {
            process.stdout.write("Quotient is ");
            arr=arr.slice(1);
            console.log(arr.reduce((a,b) => (Number(a)/Number(b))));
        }

        else
        {
            console.log("Enter valid operation (addition / subtraction / multiplication / division)");
        }
    }

    else
    {
        console.log("Enter minimum of 2 inputs for performing any operation");
    }
}