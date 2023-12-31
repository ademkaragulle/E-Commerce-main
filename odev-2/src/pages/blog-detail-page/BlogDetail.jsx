import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import img from "../../assets/img/blog/slider/five-1170x770.jpg"


function BlogDetail() {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWbsite] = useState("")
    const [message, setMessage] = useState("")
    const [comments, setComments] = useState([
        {
            "img": "../../src/assets/img/review/one.png",
            "comment": "Lorem, ipsum dolor sit amet consectetur adipisicingelit. Fuga, in.",
        },
        {
            "img": "../../src/assets/img/review/two.jpg",
            "comment": "Lorem, ipsum dolor sit amet consectetur adipisicingelit. Fuga, in.",
        },
        {
            "img": "../../src/assets/img/review/three.jpg",
            "comment": "Lorem, ipsum dolor sit amet consectetur adipisicingelit. Fuga, in.",
        }
    ])
    const blogs = [
        {
            "title": "The Difference Between Green Furniture and Sustainable Furniture",
            "img": "src/assets/img/blog/slider/one-1170x770.jpg",
            "shortText": "Many furniture companies claim their products are “green,” a designation usually referring to material sourcing. Maybe their sofa frames are made out of dumpster-sourced scrap metal or their cushions are…",
            "longText": [
                "Organization: defined culturally as a key characteristic to success and easy living. The art of organization comes easy to some but may be a bit harder for others, especially those who are always busy and never seem to have enough hours in the day. Organization and productivity go hand in hand, each influencing the other. To keep levels of productivity high, you have to be organized and usually, organized individuals are productive. Fortunately, there are many different tactics you can use around your home to keep (at least) this sector of your life in order. Today we’re highlighting four products that make organization a breeze while saving space and maximizing time.",
                "To be considered sustainable furniture, it should be high quality and support a lifestyle with reduced energy and resource needs. You can have a piece of furniture made of the most responsibly sourced materials out there, but if it falls apart in a short time and winds up in a landfill, or if it is designed in such a way that it can only fit into a carbon-spewing, resource-gobbling McMansion, it’s not sustainable. When it comes to sustainability, size does matter. Here’s why:",
                "One of the best ways, if not the best way of reducing our carbon footprints and natural resource consumption is to reduce the physical footprints of our homes. Smaller homes produce less operational carbon emissions, (e.g., heating and cooling) than larger homes and are less resource intensive to build. Smaller homes tend to discourage excessive consumerism mitigating that behavior’s attendant environmental impact. Smaller homes typically support denser, more transit friendly communities, which, by their very nature, allow for a reduction in associated transit emissions. Location, Location, Location",
                "Let’s face it, it’s the desire for – or perceived need for – more space that frequently drives people out of central, transit-friendly locations in search of more square footage. Since housing in most urban cores is considerably more expensive than suburban housing on a per square foot basis, moving to a larger home in a central location can be cost-prohibitive.",
            ],
            "slug": "Difference-Between",
            "author": "Admin",
            "comments": [
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
            ]
        },
        {
            "title": "A Busy Person Guide To Getting Organized Room",
            "img": "src/assets/img/blog/slider/six-1170x770.jpg",
            "shortText": "Many furniture companies claim their products are “green,” a designation usually referring to material sourcing. Maybe their sofa frames are made out of dumpster-sourced scrap metal or their cushions are…",
            "longText": [
                "Organization: defined culturally as a key characteristic to success and easy living. The art of organization comes easy to some but may be a bit harder for others, especially those who are always busy and never seem to have enough hours in the day. Organization and productivity go hand in hand, each influencing the other. To keep levels of productivity high, you have to be organized and usually, organized individuals are productive. Fortunately, there are many different tactics you can use around your home to keep (at least) this sector of your life in order. Today we’re highlighting four products that make organization a breeze while saving space and maximizing time.",
                "To be considered sustainable furniture, it should be high quality and support a lifestyle with reduced energy and resource needs. You can have a piece of furniture made of the most responsibly sourced materials out there, but if it falls apart in a short time and winds up in a landfill, or if it is designed in such a way that it can only fit into a carbon-spewing, resource-gobbling McMansion, it’s not sustainable. When it comes to sustainability, size does matter. Here’s why:",
                "One of the best ways, if not the best way of reducing our carbon footprints and natural resource consumption is to reduce the physical footprints of our homes. Smaller homes produce less operational carbon emissions, (e.g., heating and cooling) than larger homes and are less resource intensive to build. Smaller homes tend to discourage excessive consumerism mitigating that behavior’s attendant environmental impact. Smaller homes typically support denser, more transit friendly communities, which, by their very nature, allow for a reduction in associated transit emissions. Location, Location, Location",
                "Let’s face it, it’s the desire for – or perceived need for – more space that frequently drives people out of central, transit-friendly locations in search of more square footage. Since housing in most urban cores is considerably more expensive than suburban housing on a per square foot basis, moving to a larger home in a central location can be cost-prohibitive.",
            ],
            "slug": "Busy-Person",
            "author": "Admin",
            "comments": [
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
            ]
        },
        {
            "title": "Three Sneaky Storage Solutions For Small Spaces",
            "img": "src/assets/img/blog/slider/two-1170x770.jpg",
            "shortText": "Many furniture companies claim their products are “green,” a designation usually referring to material sourcing. Maybe their sofa frames are made out of dumpster-sourced scrap metal or their cushions are…",
            "longText": [
                "Organization: defined culturally as a key characteristic to success and easy living. The art of organization comes easy to some but may be a bit harder for others, especially those who are always busy and never seem to have enough hours in the day. Organization and productivity go hand in hand, each influencing the other. To keep levels of productivity high, you have to be organized and usually, organized individuals are productive. Fortunately, there are many different tactics you can use around your home to keep (at least) this sector of your life in order. Today we’re highlighting four products that make organization a breeze while saving space and maximizing time.",
                "To be considered sustainable furniture, it should be high quality and support a lifestyle with reduced energy and resource needs. You can have a piece of furniture made of the most responsibly sourced materials out there, but if it falls apart in a short time and winds up in a landfill, or if it is designed in such a way that it can only fit into a carbon-spewing, resource-gobbling McMansion, it’s not sustainable. When it comes to sustainability, size does matter. Here’s why:",
                "One of the best ways, if not the best way of reducing our carbon footprints and natural resource consumption is to reduce the physical footprints of our homes. Smaller homes produce less operational carbon emissions, (e.g., heating and cooling) than larger homes and are less resource intensive to build. Smaller homes tend to discourage excessive consumerism mitigating that behavior’s attendant environmental impact. Smaller homes typically support denser, more transit friendly communities, which, by their very nature, allow for a reduction in associated transit emissions. Location, Location, Location",
                "Let’s face it, it’s the desire for – or perceived need for – more space that frequently drives people out of central, transit-friendly locations in search of more square footage. Since housing in most urban cores is considerably more expensive than suburban housing on a per square foot basis, moving to a larger home in a central location can be cost-prohibitive.",
            ],
            "slug": "Sneaky-Storage",
            "author": "Admin",
            "comments": [
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
            ]
        },
        {
            "title": "The Future of Senior Housing",
            "img": "src/assets/img/blog/slider/one-1170x770.jpg",
            "shortText": "Many furniture companies claim their products are “green,” a designation usually referring to material sourcing. Maybe their sofa frames are made out of dumpster-sourced scrap metal or their cushions are…",
            "longText": [
                "Organization: defined culturally as a key characteristic to success and easy living. The art of organization comes easy to some but may be a bit harder for others, especially those who are always busy and never seem to have enough hours in the day. Organization and productivity go hand in hand, each influencing the other. To keep levels of productivity high, you have to be organized and usually, organized individuals are productive. Fortunately, there are many different tactics you can use around your home to keep (at least) this sector of your life in order. Today we’re highlighting four products that make organization a breeze while saving space and maximizing time.",
                "To be considered sustainable furniture, it should be high quality and support a lifestyle with reduced energy and resource needs. You can have a piece of furniture made of the most responsibly sourced materials out there, but if it falls apart in a short time and winds up in a landfill, or if it is designed in such a way that it can only fit into a carbon-spewing, resource-gobbling McMansion, it’s not sustainable. When it comes to sustainability, size does matter. Here’s why:",
                "One of the best ways, if not the best way of reducing our carbon footprints and natural resource consumption is to reduce the physical footprints of our homes. Smaller homes produce less operational carbon emissions, (e.g., heating and cooling) than larger homes and are less resource intensive to build. Smaller homes tend to discourage excessive consumerism mitigating that behavior’s attendant environmental impact. Smaller homes typically support denser, more transit friendly communities, which, by their very nature, allow for a reduction in associated transit emissions. Location, Location, Location",
                "Let’s face it, it’s the desire for – or perceived need for – more space that frequently drives people out of central, transit-friendly locations in search of more square footage. Since housing in most urban cores is considerably more expensive than suburban housing on a per square foot basis, moving to a larger home in a central location can be cost-prohibitive.",
            ],
            "slug": "Senior-Housing",
            "author": "Admin",
            "comments": [
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
            ]
        },
        {
            "title": "Creating An Organized Multi-Use Room",
            "img": "src/assets/img/blog/slider/five-1170x770.jpg",
            "shortText": "Many furniture companies claim their products are “green,” a designation usually referring to material sourcing. Maybe their sofa frames are made out of dumpster-sourced scrap metal or their cushions are…",
            "longText": [
                "Organization: defined culturally as a key characteristic to success and easy living. The art of organization comes easy to some but may be a bit harder for others, especially those who are always busy and never seem to have enough hours in the day. Organization and productivity go hand in hand, each influencing the other. To keep levels of productivity high, you have to be organized and usually, organized individuals are productive. Fortunately, there are many different tactics you can use around your home to keep (at least) this sector of your life in order. Today we’re highlighting four products that make organization a breeze while saving space and maximizing time.",
                "To be considered sustainable furniture, it should be high quality and support a lifestyle with reduced energy and resource needs. You can have a piece of furniture made of the most responsibly sourced materials out there, but if it falls apart in a short time and winds up in a landfill, or if it is designed in such a way that it can only fit into a carbon-spewing, resource-gobbling McMansion, it’s not sustainable. When it comes to sustainability, size does matter. Here’s why:",
                "One of the best ways, if not the best way of reducing our carbon footprints and natural resource consumption is to reduce the physical footprints of our homes. Smaller homes produce less operational carbon emissions, (e.g., heating and cooling) than larger homes and are less resource intensive to build. Smaller homes tend to discourage excessive consumerism mitigating that behavior’s attendant environmental impact. Smaller homes typically support denser, more transit friendly communities, which, by their very nature, allow for a reduction in associated transit emissions. Location, Location, Location",
                "Let’s face it, it’s the desire for – or perceived need for – more space that frequently drives people out of central, transit-friendly locations in search of more square footage. Since housing in most urban cores is considerably more expensive than suburban housing on a per square foot basis, moving to a larger home in a central location can be cost-prohibitive.",
            ],
            "slug": "Creating-Organized",
            "author": "Admin",
            "comments": [
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
            ]
        },
        {
            "title": "Sustainable Furniture in Modern World",
            "img": "src/assets/img/blog/slider/six-1170x770.jpg",
            "shortText": "Many furniture companies claim their products are “green,” a designation usually referring to material sourcing. Maybe their sofa frames are made out of dumpster-sourced scrap metal or their cushions are…",
            "longText": [
                "Organization: defined culturally as a key characteristic to success and easy living. The art of organization comes easy to some but may be a bit harder for others, especially those who are always busy and never seem to have enough hours in the day. Organization and productivity go hand in hand, each influencing the other. To keep levels of productivity high, you have to be organized and usually, organized individuals are productive. Fortunately, there are many different tactics you can use around your home to keep (at least) this sector of your life in order. Today we’re highlighting four products that make organization a breeze while saving space and maximizing time.",
                "To be considered sustainable furniture, it should be high quality and support a lifestyle with reduced energy and resource needs. You can have a piece of furniture made of the most responsibly sourced materials out there, but if it falls apart in a short time and winds up in a landfill, or if it is designed in such a way that it can only fit into a carbon-spewing, resource-gobbling McMansion, it’s not sustainable. When it comes to sustainability, size does matter. Here’s why:",
                "One of the best ways, if not the best way of reducing our carbon footprints and natural resource consumption is to reduce the physical footprints of our homes. Smaller homes produce less operational carbon emissions, (e.g., heating and cooling) than larger homes and are less resource intensive to build. Smaller homes tend to discourage excessive consumerism mitigating that behavior’s attendant environmental impact. Smaller homes typically support denser, more transit friendly communities, which, by their very nature, allow for a reduction in associated transit emissions. Location, Location, Location",
                "Let’s face it, it’s the desire for – or perceived need for – more space that frequently drives people out of central, transit-friendly locations in search of more square footage. Since housing in most urban cores is considerably more expensive than suburban housing on a per square foot basis, moving to a larger home in a central location can be cost-prohibitive.",
            ],
            "slug": "Sustainable-Furniture",
            "author": "Admin",
            "comments": [
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
                {
                    "userName": "bla bla",
                    "comment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, in."
                },
            ]
        }
    ]

    const { slug } = useParams("slug");
    const product = blogs.find(x => x.slug == slug)


    const addComment = () => {

        if (name && email && website && comments) {
            setComments([...comments, { "img": "../../src/assets/img/review/two.jpg", "comment": message }])

            setname("")
            setEmail("")
            setWbsite("")
            setMessage("")
        }
    }


    return (
        <div>
            <>
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area section-space--breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div style={{ paddingTop: "100px" }} className="col-lg-6 offset-lg-3">
                                {/*=======  breadcrumb wrapper  =======*/}
                                <div className="breadcrumb-wrapper">
                                    <h2 className="page-title">Blog Post</h2>
                                    <ul className="breadcrumb-list">
                                        <li>
                                            <Link to={"/"}>Home</Link>
                                        </li>
                                        <li className="active">Blog Post</li>
                                    </ul>
                                </div>
                                {/*=======  End of breadcrumb wrapper  =======*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}
                {/*====================  page content wrapper ====================*/}
                <div className="page-content-wrapper">
                    {/*=======  blog page area  =======*/}
                    <div className="blog-page-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 order-2">
                                    {/*=======  blog sidebar  =======*/}
                                    <div className="blog-sidebar-wrapper">
                                        {/*=======  single sidebar widget  =======*/}
                                        <div className="single-sidebar-widget single-sidebar-widget--extra-space">
                                            <h2 className="single-sidebar-widget__title single-sidebar-widget__title--extra-space">
                                                Search
                                            </h2>
                                            <div className="sidebar-search">
                                                <form action="#">
                                                    <input type="search" placeholder="Search..." />
                                                    <button type="submit">
                                                        <i className="fa fa-search" />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        {/*=======  End of single sidebar widget  =======*/}
                                        {/*=======  single sidebar widget  =======*/}
                                        <div className="single-sidebar-widget">
                                            <h2 className="single-sidebar-widget__title">Recent Posts</h2>
                                            <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--extra-height">
                                                {blogs.map((blog, index) => (
                                                    <li key={index}>
                                                        <Link to={`/blog-detail/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/*=======  End of single sidebar widget  =======*/}
                                    </div>
                                    {/*=======  End of blog sidebar  =======*/}
                                </div>
                                <div className="col-lg-9 order-1">
                                    {/*=======  blog single post details wrapper  =======*/}
                                    <div className="blog-single-post-details-wrapper">
                                        <h2 className="post-title">
                                            {product.title}
                                        </h2>
                                        <p className="post-meta">
                                            By{" "}
                                            <a href="#" className="post-author">
                                                {product.author}
                                            </a>{" "}
                                            <span className="separator">|</span>{" "}
                                            <a href="#">January 21, 2023</a>
                                        </p>
                                        <div className="post-thumbnail">
                                            <img
                                                src={`../../${product.img}`}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="post-text-content">
                                            <p>
                                                {
                                                    product.longText.map((item, index) => (
                                                        <span key={index}>
                                                            {item}
                                                            < br /> <br />
                                                        </span>
                                                    ))
                                                }
                                            </p>
                                        </div>
                                        <div className="post-share-section">
                                            <span>SHARE :</span>
                                            <ul className="post-social-icons">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-google-plus" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-pinterest" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*=======  End of blog single post details wrapper  =======*/}
                                    {/*=======  blog related post  =======*/}

                                    {/*=======  End of blog related post  =======*/}
                                    {/*=======  blog comments area  =======*/}
                                    <div className="blog-comments-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h3 className="blog-details-section-title">Comments ({comments.length})</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/*=======  blog comments  =======*/}
                                                <div className="blog-comments-wrapper">
                                                    {
                                                        comments.map((comment, index) => (
                                                            <div key={index} className={`single-blog-comment ${index % 2 == 1 && "single-blog-comment--reply"}`} >
                                                                <div className="single-blog-comment__image">
                                                                    <img
                                                                        src={comment.img}
                                                                        className="img-fluid"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="single-blog-comment__content">
                                                                    <div className="comment-time">
                                                                        <i className="fa fa-calendar" /> June 7, 2019
                                                                    </div>
                                                                    <p className="comment-text">
                                                                        {comment.comment}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                {/*=======  End of blog comments  =======*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/*=======  End of blog comments area  =======*/}
                                    {/*=======  blog comment form area  =======*/}
                                    <div className="blog-comment-form-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h3 className="blog-details-section-title">
                                                    Leave a comment
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/*=======  comment form wrapper  =======*/}
                                                <div className="contact-form-wrapper">
                                                    <div >
                                                        <div className="row">
                                                            <div className="col-lg-4 col-sm-6">
                                                                <input
                                                                    value={name}
                                                                    onChange={(e) => setname(e.target.value)}
                                                                    type="text"
                                                                    placeholder="Your Name (*)"
                                                                    required=""
                                                                />
                                                            </div>
                                                            <div className="col-lg-4 col-sm-6">
                                                                <input
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    type="text"
                                                                    placeholder="Email (*)"
                                                                    required=""
                                                                />
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <input
                                                                    value={website}
                                                                    onChange={(e) => setWbsite(e.target.value)}
                                                                    type="text"
                                                                    placeholder="Website" />
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <textarea
                                                                    value={message}
                                                                    onChange={(e) => setMessage(e.target.value)}
                                                                    cols={30}
                                                                    rows={10}
                                                                    placeholder="Message *"
                                                                    required=""
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <button
                                                                    onClick={() => addComment()}
                                                                    className="theme-button"
                                                                >
                                                                    ADD COMMENT
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*=======  End of comment form wrapper  =======*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/*=======  End of blog comment form area  =======*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of blog page area  =======*/}
                </div>
                {/*====================  End of page content wrapper  ====================*/}
            </>

        </div >
    )
}

export default BlogDetail