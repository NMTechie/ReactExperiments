import ClassPropsExp from "./PropsExp/ClassPropsExp";
import FnPropsExp from "./PropsExp/FnPropsExp";


function MyEntryComponents() {
  return (
    <div>
        <h1> This is the main entry point of my App</h1>
        <ClassPropsExp name="Value passed as Property"></ClassPropsExp>
        <FnPropsExp inputText="This is passed value through props" buttonText="Click Me!" ></FnPropsExp>
    </div>
  );
}

export default MyEntryComponents;
