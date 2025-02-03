import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const blogPosts = [
  { imgUrl: blog01, date: "Jan 15, 2024", text: "Discover how GPT-3 is reshaping the future of AI-driven conversations." },
  { imgUrl: blog02, date: "Feb 02, 2024", text: "Exploring the capabilities of OpenAI: What makes GPT-3 stand out?" },
  { imgUrl: blog03, date: "Mar 10, 2024", text: "How AI-generated content is transforming digital marketing strategies." },
  { imgUrl: blog04, date: "Apr 05, 2024", text: "The impact of AI on software development: Can GPT-3 assist coders?" },
  { imgUrl: blog05, date: "May 20, 2024", text: "Understanding the ethical concerns surrounding AI advancements." },
];




const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        {
             blogPosts.map((blogpost,index) => {
              return (
                <Article key={index}  date={blogpost.date} text={} />
              )
             })
          
        }



      </div>
    </div>
  </div>
);

export default Blog;