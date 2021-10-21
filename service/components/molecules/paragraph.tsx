import { NextPage } from "next";
import React from "react";
import { PElement } from "../atoms/p";

interface ParagraphProps {}

export const ParagraphHopr: NextPage<ParagraphProps> = ({}) => {
  return (
    <PElement>
        At HOPR, we take cyber security seriously. HOPR is an IT consultancy
        with its own in-house development team. <br />
        If you need to secure your company’s data, or the data you receive from
        your clients, HOPR has you covered.
        <br />
        What makes us different?
        <br />
        There are many data storage solutions, either on-site or in the cloud.
        But the real problems arise when data is transferred. HOPR ensures that
        data can be sent and received safely, easily and with no risk of data
        leaks.
        <br />
        We consult with companies and institutions and provide solutions for all
        their data problems.
    </PElement>
  );
};
