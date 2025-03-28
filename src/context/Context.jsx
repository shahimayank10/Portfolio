import React, { createContext, useState } from 'react'


export const ProfileData=createContext();

const Context = (props) => {

    const [skills, setSkills] = useState([
        { id: 1, name: 'ReactJs', image: 'reactjs.svg', link: 'https://reactjs.org/' },
        { id: 2, name: 'JavaScript', image: 'javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { id: 3, name: 'HTML', image: 'html.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { id: 4, name: 'CSS', image: 'css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { id: 5, name: 'C++', image: 'cpp.svg', link: 'https://www.geeksforgeeks.org/c-plus-plus/' },
        { id: 6, name: 'MySql', image: 'sql.svg', link: 'https://www.mysql.com/' },
        { id: 7, name: 'Bootstrap', image: 'bootstrap.svg', link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/' },
        { id: 8, name: 'Tailwind', image: 'tailwind.svg', link: 'https://tailwindcss.com/' },
        
      ]);

    const ProjectDetails=[{title:"to do list", tech:"html, css, js", duration:"Aug,2024",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus inventore cumque laudantium rerum. Accusantium in quidem sit nisi sequi itaque nemo magni nesciunt natus fugiat totam, ullam eius, ducimus quis ipsa tempora dicta expedita doloribus laudantium soluta ex, hic molestiae nulla? Fuga repellat voluptatum inventore quas animi impedit perferendis ab omnis neque accusamus, odit hic atque expedita totam, perspiciatis cupiditate, error qui consequatur voluptas! Corporis ab, non pariatur eaque ipsam magni nisi saepe expedita mollitia porro error iste neque id vitae, sunt ipsa voluptatum totam, possimus quos nesciunt eos dicta harum accusantium libero! Beatae cupiditate impedit ducimus fugit perferendis",link:""},
                          {title:"News App", tech:"html, css, js", duration:"May,2024",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus inventore cumque laudantium rerum. Accusantium in quidem sit nisi sequi itaque nemo magni nesciunt natus fugiat totam, ullam eius, ducimus quis ipsa tempora dicta expedita doloribus laudantium soluta ex, hic molestiae nulla? Fuga repellat voluptatum inventore quas animi impedit perferendis ab omnis neque accusamus, odit hic atque expedita totam, perspiciatis cupiditate, error qui consequatur voluptas! Corporis ab, non pariatur eaque ipsam magni nisi saepe expedita mollitia porro error iste neque id vitae, sunt ipsa voluptatum totam, possimus quos nesciunt eos dicta harum accusantium libero! Beatae cupiditate impedit ducimus fugit perferendis",link:""},

    ]
  return <div>

    <ProfileData.Provider value={{skills,ProjectDetails}}>{props.children}</ProfileData.Provider>
  </div>
}

export default Context
