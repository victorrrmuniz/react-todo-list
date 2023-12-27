import styles from './TodoList.module.scss';
import logo from './../../assets/logo.svg';
import plusImage from './../../assets/plus.svg';
import clipboardImage from './../../assets/clipboard.svg';
import trashImage from './../../assets/trash.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Todo {
    id: number;
    todo: string;
    completed: boolean;
}

export function TodoList() {

    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [completedTasks, setCompletedTasks] = useState(0);
    const [createdTasks, setCreatedTasks] = useState(0);
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState('');

    function handleCreateTask() {
        if (newTask.length > 0) {
            const newTaskItem: Todo = {
                id: todoList.length,
                todo: newTask,
                completed: false
            };
    
            setTodoList([...todoList, newTaskItem]);
            setNewTask('');
            setCreatedTasks(todoList.length + 1);
            setError('');
        } else {
            setError('O campo é obrigatório');
        }
    }

    function handleCheckTask(event: ChangeEvent<HTMLInputElement>, id: number) {
        const updatedTodoList: Todo[] = todoList.map((todo) => {
            return todo.id === id ? { ...todo, completed: event.target.checked } : todo
        });

        setCompletedTasks(updatedTodoList.filter(todo => todo.completed).length);
        setTodoList(updatedTodoList);
    }

    function handleDeleteTask(id: number) {
        var updateTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(updateTodoList);
        setCreatedTasks(updateTodoList.length);
        setCompletedTasks(updateTodoList.filter(todo => todo.completed).length);
    }

    return (
        <div className={styles.todoListContainer}>
            <div className={styles.titleContainer}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.formContainer}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                />
                <button onClick={handleCreateTask}>
                    <span>Criar</span>
                    <img src={plusImage} alt="" />
                </button>

                <div className={styles.messageError}>{error}</div>
            </div>

            

            <div className={styles.listContainer}>
                <div className={styles.headerContainer}>
                    <div>
                        <span>Tarefas criadas</span>
                        <span>{createdTasks}</span>
                    </div>
                    <div>
                        <span>Concluídas</span>
                        <span>
                            {completedTasks}
                            {
                                createdTasks > 0 && <> de {createdTasks}</>
                            }
                        </span>
                    </div>
                </div>

                {
                    todoList.length > 0 ?
                    <div className={styles.listContainer}>
                        {
                            todoList.map(item => {
                                return (
                                    <div className={styles.todoContainer} key={item.id}>
                                        <span>
                                            <input type="checkbox" onChange={(event) => handleCheckTask(event, item.id)} />
                                            <p className={item.completed ? styles.completed : ''}>{item.todo}</p>
                                        </span>
                                        <span onClick={() => handleDeleteTask(item.id)}>
                                            <img src={trashImage} alt="" />
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className={styles.emptyList}>
                        <span>
                            <img src={clipboardImage} alt="" />
                        </span>
                        <span>
                            <p>Você aidna não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </span>
                    </div>
                }
            </div>
        </div>
    );
}