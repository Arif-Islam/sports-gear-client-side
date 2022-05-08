import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='bg-gray-200 py-16 font-montserat'>
            <div className='w-11/12 lg:w-1/2 mx-auto'>
                <div className='flex flex-col gap-10 justify-center items-center'>
                    <div className=''>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 tracking-wide'>Difference between Javascript and Node JS</h1>
                        <p>1. Javascript is a web scripting language. NodeJS is a runtime environment for Javascript. <br /> 2. Javascript is only accessible in browsers. With the help of NodeJS, we can execute Javascript outside of the browser. <br /> 3. Javascript is mostly used on the client's end where NodeJS is used on server side. <br /> 4. Javascript has the ability to add HTML and manipulate the DOM. Nodejs does not support adding HTML tags. <br /> 5. Javascript is compatible with all browser engines, including Safari's JS core and Firefox's Spidermonkey. V8 is the Javascript engine inside of node.js that parses and runs Javascript.</p>
                    </div>
                    <div className=''>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 tracking-wide'>When should you use nodejs and when should you use mongodb? </h1>
                        <p>Node.js provides excellent speed and performance. We can use Nodejs for real-time messaging or chatting because it can handle a high volume of small messages. Again, if we need to manage big amounts of data, NodeJS can be really useful. NodeJS can also be used to transport large amounts of data in smaller bundles. MongoDB is a cross-platform document-oriented database application which is open source. If we can represent our data as a collection of documents, Mongodb may be a good fit. Mongodb can be used to create apps that can evolve quickly and scale elegantly. </p>
                    </div>
                    <div className=''>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 tracking-wide'>Differences between sql and nosql databases.</h1>
                        <p>1. SQL databases are known as Relational Database Management Systems (RDBMS), whereas NoSQL databases are known as non-relational or distributed databases. <br /> 2. SQL databases have a predetermined schema that is fixed, static, or both. NoSQL databases have a flexible schema. <br /> 3. SQL databases are not designed to store hierarchical data. NoSQL databases are great for storing hierarchical data. <br /> 4. The ACID characteristics (Atomicity, Consistency, Isolation, and Durability) are followed by SQL databases, but the Brewers CAP theorem is followed by NoSQL databases (Consistency, Availability and Partition tolerance). <br /> 5. Tables are used in SQL databases. NoSQL databases, on the other hand, are either key-value pairs, document-based databases, graph databases, or wide-column stores.</p>
                    </div>
                    {/* <div className=''>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 tracking-wide'>Difference between Javascript and Node JS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis debitis quaerat eligendi odio nostrum nam architecto quas similique sit sed.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Blogs;