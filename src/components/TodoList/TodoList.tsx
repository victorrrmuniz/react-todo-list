import styles from './TodoList.module.scss';
import logo from './../../assets/logo.svg';
import plusImage from './../../assets/plus.svg';
import clipboardImage from './../../assets/clipboard.svg';
import trashImage from './../../assets/trash.svg';

export function TodoList() {

    return (
        <div className={styles.todoListContainer}>
            <div className={styles.titleContainer}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.formContainer}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button>
                    <span>Criar</span>
                    <img src={plusImage} alt="" />
                </button>
            </div>

            <div className={styles.listContainer}>
                <div className={styles.headerContainer}>
                    <div>
                        <span>Tarefas criadas</span>
                        <span>0</span>
                    </div>
                    <div>
                        <span>Concluídas</span>
                        <span>0</span>
                    </div>
                </div>

                <div className={styles.listContainer}>
                    <div className={styles.todoContainer}>
                        <span>
                            <input type="checkbox" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </span>
                        <span>
                            <img src={trashImage} alt="" />
                        </span>
                    </div>
                </div>

                {/* <div className={styles.emptyList}>
                    <span>
                        <img src={clipboardImage} alt="" />
                    </span>
                    <span>
                        <p>Você aidna não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </span>
                </div> */}
            </div>
        </div>
    );
}