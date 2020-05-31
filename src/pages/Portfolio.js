import React from 'react';
import { Container, Row } from '../components/Grid';
import Project from '../components/Project';

// ------- images ---------
import LanguageTranslator from '../assets/translator.png';
import EventPlanner from '../assets/event_planner.png';
import WeatherDashboard from '../assets/weather.png';
import WorkDayScheduler from '../assets/scheduler.png';
import MouseTrainer from '../assets/mouse_trainer.png';
import CodeQuiz from '../assets/code_quiz.png';
import OrderUp from '../assets/orderup.png';
import GoogleBooksSearch from '../assets/book_search.png';
import FitnessTracker from '../assets/fitness_tracker.png';

function Portfolio() {
    return (
        <Container>
            <Row>
                <Project
                    name="Google Books Search"
                    image={GoogleBooksSearch}
                    link="https://sleepy-dawn-46114.herokuapp.com/"
                    github="https://github.com/mgrinx/book-search">
                    Look up and save books in a database
                </Project>

                <Project
                    name="OrderUp"
                    image={OrderUp}
                    link="https://shrouded-taiga-01572.herokuapp.com/"
                    github="https://github.com/mgrinx/orderup">
                    Order food from inside a restaurant
                </Project>

                <Project
                    name="Fitness Tracker"
                    image={FitnessTracker}
                    link="https://enigmatic-taiga-74346.herokuapp.com/"
                    github="https://github.com/mgrinx/fitness-tracker">
                    Track your daily workouts
                </Project>

                <Project
                    name="Language Translator"
                    image={LanguageTranslator}
                    link="https://yaya2020130.github.io/language-translator/"
                    github="https://github.com/yaya2020130/language-translator">
                    Translation app with voice support
                </Project>

                <Project
                    name="To-Gather"
                    image={EventPlanner}
                    link="https://awesome-group-planner.herokuapp.com/"
                    github="https://github.com/the-medium-place/group-planner">
                    Plan events together
                </Project>

                <Project
                    name="Weather Dashboard"
                    image={WeatherDashboard}
                    link="https://mgrinx.github.io/weather-dashboard/"
                    github="https://github.com/mgrinx/weather-dashboard">
                    Find weather for a city
                </Project>

                <Project
                    name="Work Day Scheduler"
                    image={WorkDayScheduler}
                    link="https://mgrinx.github.io/work-day-scheduler/"
                    github="https://github.com/mgrinx/work-day-scheduler">
                    Schedule your 9 to 5
                </Project>

                <Project
                    name="Mouse Trainer"
                    image={MouseTrainer}
                    link="https://mgrinx.github.io/mouse-trainer/"
                    github="https://github.com/mgrinx/mouse-trainer">
                    Click on circles
                </Project>

                <Project
                    name="Code Quiz"
                    image={CodeQuiz}
                    link="https://mgrinx.github.io/code-quiz/"
                    github="https://github.com/mgrinx/code-quiz">
                    Do you know the basics?
                </Project>
            </Row>
        </Container>
    );
}

export default Portfolio;