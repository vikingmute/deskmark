import React, {PropTypes} from 'react';

const propTypes = {
  openEmptyEditor: PropTypes.func.isRequired
};

function CreateBar({openEmptyEditor}){
  return (
    <a href="#" onClick={openEmptyEditor} className="list-group-item create-bar-component">
      + 创建新的文章
    </a>
  );
}

CreateBar.propTypes = propTypes;

export default CreateBar;
