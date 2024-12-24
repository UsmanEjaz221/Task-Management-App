namespace TaskManager.Data
{
	public class taskClass
	{
		public string Task { get; set; } = string.Empty; // Ensure public property
		public bool IsComplete { get; set; } = false;


		public taskClass() { 
			Task = string.Empty;
			//totalTasks = 0;
			IsComplete = false;		// every task is initialized as  incomplete
		}
		void setTask(string t) { Task = t; }

		public string getTask() { return Task; }
		//public void setIsComplete(bool isComp)
		//{
		//	this.IsComplete = isComp;
		//}

		public void AddTask(string task)	// setting 
		{
			this.Task = task;
			this.IsComplete = false;
		}

	}
}
