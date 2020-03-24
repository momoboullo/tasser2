import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default class Services extends
    Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info:'A paragraph is a series of related sentences developing a central idea, called the topic. Paragraphs add one idea at a time to your broader argument'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'A paragraph is a series of related sentences developing a central idea, called the topic. Paragraphs add one idea at a time to your broader argument'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:'A paragraph is a series of related sentences developing a central idea, called the topic. Paragraphs add one idea at a time to your broader argument'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'A paragraph is a series of related sentences developing a central idea, called the topic. Paragraphs add one idea at a time to your broader argument'
            },
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}