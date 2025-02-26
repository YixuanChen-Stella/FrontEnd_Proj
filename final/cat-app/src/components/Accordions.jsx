import React, { useState } from 'react';
import '../styles/Accordions.css';

function Accordions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { 
      title: 'Our Story', 
      content: `Our journey began in a small town with a big dream. We wanted to create a place where cat lovers could come together to enjoy delicious food and share their love for cats. Over the years, we have grown into a community that celebrates the joy and companionship that cats bring into our lives. Our cafe started as a humble idea, inspired by the love for cats and the joy they bring. We envisioned a space where people could relax, enjoy a cup of coffee, and be surrounded by the warmth of feline friends. Today, we are proud to be a hub for cat enthusiasts, offering a unique experience that combines the comfort of a cafe with the charm of a cat sanctuary.`
    },
    { 
      title: 'About Cat', 
      content: `Cats are fascinating creatures known for their independence and playful nature. They have been companions to humans for thousands of years, providing comfort and companionship. Our cafe is home to several friendly cats who love to interact with our guests. Each cat has its own personality and story, and we take pride in providing them with a loving and safe environment. We believe that cats have a unique ability to bring joy and relaxation to people's lives, and we are committed to promoting their well-being and happiness.`
    },
    { 
      title: 'About Food', 
      content: `Our menu is crafted with love and care, featuring a variety of dishes that cater to all tastes. From freshly brewed coffee to delectable pastries, we ensure that every item is made with the finest ingredients. Our chefs are passionate about creating meals that not only taste great but also bring joy to our customers. We offer a range of options, including vegan and gluten-free dishes, to accommodate different dietary preferences. Our commitment to quality and sustainability is reflected in our choice of ingredients, sourced from local farms and suppliers.`
    },
    { 
      title: 'Notes', 
      content: `We believe in creating a welcoming environment for everyone. Whether you are here to relax with a book or to meet new friends, our cafe is the perfect place to unwind. We also host regular events and workshops to engage our community and share our love for cats and good food. Our notes section is a space where we share updates, stories, and insights about our cafe and the wonderful cats that call it home. We invite you to join us on this journey and become a part of our growing community.`
    },
    { 
      title: 'FAQ', 
      content: `Q: Do you allow pets?\nA: Yes, we welcome well-behaved pets.\n\nQ: Do you offer vegan options?\nA: Absolutely, we have a variety of vegan dishes available.\n\nQ: Can I host a private event?\nA: Yes, please contact us for more details on private bookings.\n\nQ: How can I support the cafe?\nA: You can support us by visiting, participating in our events, or making a donation to help care for our cats.\n\nQ: Are the cats available for adoption?\nA: Some of our cats are available for adoption. Please speak to a staff member for more information.`
    },
  ];

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
          <h3 className="accordion-header" onClick={() => toggleAccordion(index)}>
            {section.title}
          </h3>
          <div className="accordion-content">
            {activeIndex === index && section.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordions;
