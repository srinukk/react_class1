import Button from "./components/button/button.js";
import List from './components/list/list.js';
import Image from './components/images/image.js';
import Table from './components/table/table.js';
import Form from './components/forms/form .js';
import Ternary from './components/ternary/ternary.js';
import Heading1,{Heading2,Heading3,Heading4,Heading5} from './components/headings/heading.js'

function Hello(){
  return(
<div>
  <h1>hello world</h1>
    <Button/>
    <List/>
    <Image/>
    <Table/>
    <Form/>
    <Ternary/>
    <Heading1/>
    <Heading2/>
    <Heading3/>
    <Heading4/>
    <Heading5/>
</div>
  )
}
export default Hello