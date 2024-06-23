import React from 'react'
import mallImage from "../../assets/mallImage.jpg"
import {Link} from 'react-router-dom'
export default function About() {
  return (
     <div className='flex flex-col md:flex-row px-5 py-10 md:justify-between'>
        <div>
            <img 
            src={mallImage}
            alt="MyMallImaghe" 
            className='rounded-2xl'
            height={200}
            width={2000}
            />
        </div>
        <div className='ml-10'>
            <div>
                <h1 className='text-3xl font-bold my-5 text-green-400'>IntroDuction : </h1>
                <p className='font-semibold'>Hello everyone, my name is Kartik Paul. I am currently a final-year Engineering student from West Bengal, India. Throughout my academic journey, I have consistently demonstrated strong performance and dedication. In my class 10th examinations, I achieved an impressive 82% mark. I continued to excel in my class 12th exams, where I secured 87%. Presently, my college percentage stands at 85%, reflecting my commitment to maintaining high academic standards.</p>
            </div>
            <div>
                <h1 className='text-3xl text-orange-700 font-bold my-5 mb-2'>All SkillSet I Have :</h1>
                <p className='font-semibold'>In addition to my academic pursuits, I have developed a solid foundation in web development. I have learned HTML, CSS, and JavaScript, and I am proficient in the MERN stack (MongoDB, Express.js, React, Node.js). I have created several projects showcasing my skills and continue to expand my knowledge in this field. Currently, I am delving deeper into React to enhance my front-end development capabilities.</p>
            </div>
            <div>
                <ul> <h1 className='text-3xl text-violet-700 font-bold mt-5 mb-2'>Some Project : </h1>
                    <li className='text-xl font-semibold'>1. Tic-Tac-Game</li>
                    <li className='text-xl font-semibold'>2. Create Basic Calculator</li>
                    <li className='text-xl font-semibold'>3. Create To-Do App Using redux-toolkit</li>
                    <li className='text-xl font-semibold'>4. Weather Forcasting App</li>
                    <li className='text-xl font-semibold'>5. Currency Converter App</li>
                </ul>
                <p className='text-xl font-semibold mt-5'>In Using JavaScript I create more than 20 project which can help me a lot for understanding JavaScript</p>

                <p className='text-xl mt-2 font-bold'>For Checking Project Plesae Visit My GitHub: 
                    <Link 
                    to='https://github.com/kartikpaul'
                    className='border px-4 py-1 ml-2 bg-green-300 rounded-xl hover:bg-green-400 duration-200 hover:text-white'
                    >Click Here</Link>
                </p>

                <div>
                    <p className='text-3xl font-bold my-5 text-blue-500'>Hobby :</p>

                    <ul className='font-bold'> 
                        <li>Playing Football</li>
                        <li>Running</li>
                        <li>Traveling</li>
                        <li>Riding</li>
                    </ul>
                </div>
            </div>
           <div className='my-5 text-center font-bold'>
                <p className='mt-1 text-green-400'>Happy Learning !</p>
                <p className='mt-1 text-red-400'>have A Nice Day !</p>
                <p className='mt-1 text-blue-400'>Keep Learning !</p>
                <p className='mt-1 text-violet-400'>Keep Growing !</p>
           </div>
        </div>
        </div>
  );
}