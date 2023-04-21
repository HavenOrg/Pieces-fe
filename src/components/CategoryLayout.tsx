import { Component, createResource } from 'solid-js';


type Props = {
  category: any;
  children: any;
};

const CategoryLayout: Component<Props> = (props) => {
  return (
    <div class="flex flex-col justify-center items-center w-screen h-screen bg-orange-100 block">
      <h1>Category: {props.category}</h1>
      {props.children}
    </div>
  );
};

export default CategoryLayout;
