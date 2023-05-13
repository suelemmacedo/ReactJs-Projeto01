import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aliquid dicta tenetur atque! Aliquam minus, necessitatibus sunt dolore illo voluptates eligendi earum odio reprehenderit laboriosam tenetur ullam consequuntur distinctio impedit." 
      />
      <Post 
        author="Suelem Macedo" 
        content="Um novo post muito legal!" 
      />   
    </div>
  )
}


