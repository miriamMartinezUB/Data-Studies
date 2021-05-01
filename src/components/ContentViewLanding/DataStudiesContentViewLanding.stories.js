import React from 'react'
import DataStudiesContentViewLanding from "./DataStudiesContentViewLanding";
import 'typeface-roboto'

export default {
    title: "DataStudiesContentViewLanding",
    component: DataStudiesContentViewLanding
}

export const ContentViewExemple = () => (
    <DataStudiesContentViewLanding title1={"Data"} title2={"Studies"} href1={'/data'} href2={"/studies"}
                                   text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis turpis id ex finibus tempor. Proin vel augue dui. Etiam euismod pharetra fringilla. Donec sagittis mi vel quam gravida, in molestie lectus cursus. Aenean sit amet mauris sit amet lorem aliquet porta. Proin ut scelerisque risus. Sed aliquam, neque ut suscipit accumsan, turpis leo varius libero, ut sodales nisl orci a nunc. Nullam ultrices, eros eget ullamcorper scelerisque, lectus tortor vestibulum lorem, vitae vestibulum diam lacus sed purus. Nunc dolor dui, viverra eu dignissim eu, suscipit at velit. Morbi ut tortor suscipit, mattis arcu in, accumsan orci. Nulla sit amet fringilla nibh. Cras sed auctor dui, et ultricies purus."}
                                   text2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis turpis id ex finibus tempor. Proin vel augue dui. Etiam euismod pharetra fringilla. Donec sagittis mi vel quam gravida, in molestie lectus cursus. Aenean sit amet mauris sit amet lorem aliquet porta."}/>)