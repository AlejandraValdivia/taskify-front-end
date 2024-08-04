const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

export const signup = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      return data.user;
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const signin = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      return JSON.parse(atob(data.token.split(".")[1]));
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return JSON.parse(atob(token.split(".")[1]));
};

export const signout = () => {
  localStorage.removeItem("token");
};

/* API CALLS FOR TASKS */

export const getTasks = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/tasks`);
    if (!response.ok) throw new Error("Error fetching tasks");
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getTask = async (taskId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/tasks/${taskId}`);
    if (!response.ok) throw new Error("Error fetching task");
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const addTask = async (task) => {
  try {
    const response = await fetch(`${BACKEND_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error("Error adding task");
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Error deleting task");
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await fetch(`${BACKEND_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    if (!response.ok) throw new Error("Error updating task");
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const bookTask = async (taskId) => {
  try {
    const task = await getTask(taskId);
    const updatedTask = { ...task, booked: true };
    return await updateTask(taskId, updatedTask);
  } catch (error) {
    throw error;
  }
};

export const searchTask = async (taskName) => {
  try {
    const response = await fetch(`${BACKEND_URL}/tasks?name=${taskName}`);
    if (!response.ok) throw new Error("Error searching task");
    const tasks = await response.json();
    return tasks.length > 0 ? tasks[0] : null;
  } catch (error) {
    throw error;
  }
};
