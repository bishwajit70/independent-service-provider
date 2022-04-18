import React from 'react';

const Blog = () => {
    return (
        <div className='px-5 pt-20 md:px-5 lg:px-10 xl:px-40 grid grid-flow-row md:flex justify-between items-center'>
            <div className='text-left w-full pb-10'>
                <h1 className='text-orange-500 text-2xl pb-5'>Difference between authorization and authentication. </h1>

                <p>Authorization is the process of verifying what specific applications , files and data a user has access to. On the other hand  authentication is the process of verifying who some is. For example when you have logged in or registered in a website that means you are authorized to access the content of the website. By the process you are logged in or registered to the website is called authentiation.</p>

                <h1 className='text-orange-500 text-2xl pt-5 pb-5'>Why are you using firebase? What other options do you have to implement authentication?</h1>

                <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>

                <p>There are many other alternative options to implement authentication without firebase. For example Back4app is a reliable Firebase alternative that works with an amalgamation of open-source technologies. It offers features like a relational data model, scalable hosting, REST and GraphQL APIs, notifications, authentication, and storage. There are some more alternatives like- AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, Flutter.</p>

                <h1 className='text-orange-500 text-2xl pt-5 pb-5'>What other services does firebase provide other than authentication?</h1>
                <p>Firebase provides following services other than authentication:</p>
                <ul>
                    <li>Realtime data.</li>
                    <li>Ready-made api.</li>
                    <li>Built in security at the data node level.</li>
                    <li>File storage backed by Google Cloud Storage.</li>
                    <li>Static file hosting.</li>
                </ul>
            </div>

        </div>
    );
};

export default Blog;