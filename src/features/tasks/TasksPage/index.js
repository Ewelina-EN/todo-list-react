import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons/index";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import StyledContainer from "../../../common/Container";
import DownloadButton from "./DownloadButtons/DownloadButton";
import Search from './Search';

function TasksPage() {
  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={< Form />}
        extraHeaderContent={<DownloadButton />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={< TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </StyledContainer>
  );
};

export default TasksPage;
