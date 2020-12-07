import React, { useEffect, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

export const Dashlist = (props) => {
    return (
        <>
          <tr>
            <td>{props.text.id}</td>
            <td>{props.text.title}</td>
            <td>{props.text.body}</td>
            <td><DeleteIcon /></td>
          </tr>
        </>
      );
}
