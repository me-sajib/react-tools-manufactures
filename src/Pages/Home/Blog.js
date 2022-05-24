import React from "react";

const Blog = () => {
  return (
    <div className="container-width">
      <h1 className="text-center text-4xl text-info font-bold my-12">
        Some Question Answer
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-1 py-12">
        <div className="shadow-xl p-4">
          <h2 className="text-xl font-bold text-secondary">
            How will i improve the performance of a React Application?
          </h2>
          <p className="py-4">
            React performance tuning by fixing unnecessary rendering of
            components. Need to make sure that components receive only necessary
            props. It will control the CPU consumption and avoid over-rendering
            unnecessary features.The solution is to create a functional
            component that will collect all props and redistribute them to other
            components.
          </p>
        </div>
        {/* second question */}
        <div className="shadow-xl p-4">
          <h2 className="text-xl font-bold text-secondary">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="py-4">
            There are many types of state properly manage in React apps. some
            popular state management way to reducer, Redux, MobX, and some
            other.
          </p>
        </div>
        {/* third question */}
        <div className="shadow-xl p-4">
          <h2 className="text-xl font-bold text-secondary">
            How does prototypical inheritance work?
          </h2>
          <p className="py-4">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. it method by which object inherit
            the property and methods of another object. this model can also be
            known as prototypal, prototype-oriented, classless, or
            instance-based programming.
          </p>
        </div>
        {/* fourth question */}
        <div className="shadow-xl p-4">
          <h2 className="text-xl font-bold text-secondary">
            Why i do not set the state directly in React
          </h2>
          <p className="py-4">
            To change a value in the state object, use the this. setState()
            method. When a value in the state object changes, the component will
            re-render, meaning that the output will change according to the new
            value.
          </p>
        </div>
        {/* fourth question */}
        <div className="shadow-xl p-4">
          <h2 className="text-xl font-bold text-secondary">
            What is a unit test? Why should write unit tests?
          </h2>
          <p className="py-4">
            What is unit testing? Unit testing is a software development process
            in which the smallest testable parts of an application ,are
            individually and independently scrutinized for proper operation.
            Unit testing ensures that all code meets quality standards before
            it's deployed. This ensures a reliable engineering environment where
            quality is paramount. helps developers write better code This.
            testing methodology is done during the development process by the
            software developers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
