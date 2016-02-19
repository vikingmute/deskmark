import React from 'react';

export default function CreateBar({onOpenEmptyEditor}){
  return (
    <a href="#" onClick={onOpenEmptyEditor} className="list-group-item create-entry">
      + 创建新的文章
    </a>
  )
}
