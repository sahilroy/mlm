(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{Mdw5:function(e,t,a){"use strict";a.r(t),a.d(t,"categoryPageQuery",(function(){return s}));var r=a("q1tI"),n=a.n(r),c=(a("Wbzz"),a("7oih")),o=(a("rK22"),a("rTP0"));t.default=function(e){console.log("props: ",e);var t=e.data.courses.edges.map((function(e){return e.node})),a=e.data.collections.edges.map((function(e){return e.node.frontmatter})),r=e.data.category;return n.a.createElement(c.a,null,n.a.createElement("h1",{id:"category-name"},r.frontmatter.name),a.map((function(e,a){if(!e.courses||0===e.courses.length)return n.a.createElement(n.a.Fragment,{key:a});var r=[];return t.map((function(t){-1!==e.courses.indexOf(t.frontmatter.name)&&r.push(t)})),0===r.length?n.a.createElement(n.a.Fragment,{key:a}):n.a.createElement(o.a,{courses:r,name:e.name,key:e.name})})),n.a.createElement(o.a,{courses:t,name:"All "+r.frontmatter.name+" Courses"}))};var s="354013341"},pp0x:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),c=a("9eSz"),o=a.n(c);t.a=function(e){var t=e.title,a=e.price,r=e.instructor,c=(e.featuredImage,e.link),s=e.description,i=e.card_image;return n.a.createElement("div",{className:"course-card",onClick:function(){window.location=c}},n.a.createElement("div",{className:"course-card-top-container"},n.a.createElement(o.a,{className:"course-card-image",fluid:i&&i.childImageSharp&&i.childImageSharp.fluid,alt:"Course Card Image"}),n.a.createElement("div",{className:"course-card-content-container"},n.a.createElement("h3",{className:"course-card-title"},t),n.a.createElement("div",{className:"course-card-instructor-container"},n.a.createElement("img",{src:r&&r.image&&r.image.childImageSharp&&r.image.childImageSharp.fluid&&r.image.childImageSharp.fluid.src,className:"course-card-instructor-image",alt:"Instructor Name"}),n.a.createElement("h5",{className:"course-card-instructor-name"},r.name),n.a.createElement("h4",{className:"course-card-price mobile-hidden"},"₹",a)),n.a.createElement("h4",{className:"course-card-price desktop-hidden"},"₹",a))),n.a.createElement("div",{className:"course-card-bottom-container"},n.a.createElement("p",null,s),n.a.createElement("button",{className:"explore-course-button"},"Explore Course")))}},rK22:function(e,t,a){"use strict";a("q1tI"),a("pp0x")},rTP0:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),c=a("pp0x");t.a=function(e){var t=e.courses,a=e.name,r=n.a.useRef(),o=n.a.useState(0),s=o[0],i=o[1];n.a.useEffect((function(){window&&r&&l()}),[]);var l=function(e){var t=r.current.clientWidth/r.current.scrollWidth*100;i(t);var a=100-t;console.log(t,a);var n=100*r.current.scrollLeft/(r.current.scrollWidth-r.current.clientWidth);i(n-10),console.log(n)};return n.a.createElement("div",{id:"trending-section",className:"trending-courses-section"},n.a.createElement("h2",{id:"trending-section-heading",className:"mobile-hidden"},a),n.a.createElement("div",{className:"section-header-container desktop-hidden"},n.a.createElement("h2",{className:"section-header"},a),n.a.createElement("div",{className:"section-header-underline"})),n.a.createElement("div",{id:"trending-section-courses-container",className:"courses-list-container",onScroll:l,ref:r},t.map((function(e){return n.a.createElement(c.a,{key:e.fields.slug,title:e.frontmatter.name,instructor:e.frontmatter.instructor.frontmatter,price:e.frontmatter.price,featuredImage:e.frontmatter.featuredimage,link:e.fields.slug,description:e.frontmatter.card_description||e.frontmatter.description,card_image:e.frontmatter.card_image})})),n.a.createElement("div",{style:{width:"20px",height:"100%"}}," ")),n.a.createElement("div",{className:"courses-scroll-container"},n.a.createElement("button",{className:"courses-scroll-button",onClick:function(){r.current.scrollLeft-=600}},n.a.createElement("span",null,"<")),n.a.createElement("button",{className:"courses-scroll-button",onClick:function(){r.current.scrollLeft+=600}},n.a.createElement("span",null,">")),n.a.createElement("div",{style:{width:"100%",height:"3px",backgroundColor:"grey",maxWidth:"600px",overflow:"hidden"}},n.a.createElement("div",{style:{marginLeft:s+"%",width:"150px",backgroundColor:"white",height:"100%"}}))))}}}]);
//# sourceMappingURL=component---src-templates-category-js-1cd41b6b40135ae2928b.js.map