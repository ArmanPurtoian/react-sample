import * as React from "react";
import {useSearchParams} from "react-router-dom";

export default function withSearchParams(Component) {
  return function componentWithSearchParams(props) {
    const [searchParams] = useSearchParams()

    console.log(searchParams)

    return <Component {...props} router={searchParams} />
  }
}