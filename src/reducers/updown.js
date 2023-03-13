
const initialvalue = 0;
const changeno = (state = initialvalue , action) =>
{
        switch(action.type)
        {
            case "INCREMENT" : return state + 1;
            case "DECREMENT" : return state - 1;

            default : return state;
        }
}
export default changeno;