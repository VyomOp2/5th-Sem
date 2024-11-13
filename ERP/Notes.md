1. **What is JDBC?**  
   JDBC (Java Database Connectivity) is an API in Java that enables applications to connect to and communicate with databases. It provides methods for querying and updating data, as well as managing database connections. JDBC supports different databases (e.g., MySQL, PostgreSQL, Oracle) through specific drivers, which act as intermediaries, translating Java commands into database-specific SQL commands.

2. **Explain JDBC Architecture**  
   JDBC architecture is based on a two-layer model:
   - **JDBC API Layer**: Offers a set of interfaces and classes in Java that allow applications to perform various database operations (e.g., execute queries, retrieve results).  
   - **JDBC Driver Manager Layer**: Acts as a bridge between the application and the database. It uses JDBC drivers to connect with different databases. There are four types of JDBC drivers:
     - **Type 1**: JDBC-ODBC bridge (not commonly used).
     - **Type 2**: Native API drivers, using OS-specific APIs.
     - **Type 3**: Network Protocol drivers, connecting through middleware.
     - **Type 4**: Thin drivers, pure Java drivers that communicate directly with the database.

3. **Explain JDBC Components**  
   JDBC has several core components:
   - **DriverManager**: Manages database drivers and connection requests. It loads the appropriate driver when connecting to a database.
   - **Connection**: Represents an active session with a specific database. It’s used to send SQL statements and receive results.
   - **Statement**: Executes SQL statements, supporting simple queries without parameters.
   - **PreparedStatement**: Precompiled SQL statement with placeholders for parameters, enhancing security and performance.
   - **ResultSet**: Holds the data retrieved from a database query, allowing iteration through the rows and columns of the results.

4. **How to configure Eclipse to use MySQL database**  
   To connect Eclipse to a MySQL database:
   - Download the **MySQL Connector/J** (a JDBC driver) JAR file from MySQL’s official website.
   - Open Eclipse, go to **Project Properties** > **Java Build Path** > **Libraries**, then click **Add External JARs** to add the downloaded MySQL Connector.
   - In your Java code, load the MySQL driver (`Class.forName("com.mysql.cj.jdbc.Driver")`) and establish a connection using `DriverManager.getConnection(...)` with the database URL, username, and password.

5. **What is XML and Where is it used?**  
   XML (eXtensible Markup Language) is a flexible text-based format that allows data to be structured in a hierarchical format. Unlike HTML, XML focuses on data storage and transport rather than displaying content. XML is widely used for:
   - **Data exchange** between applications (e.g., web services, REST APIs).
   - **Configuration files** for applications, especially in Java.
   - **RSS feeds** for web syndication.
   - **Document storage** for applications needing a structured data format.

6. **Explain Build Automation Tool and its Types**  
   Build automation tools streamline and automate repetitive tasks in software development, such as code compilation, testing, and deployment. Types include:
   - **Make**: One of the earliest tools for compiling and linking code, especially in Unix/Linux environments.
   - **Apache Ant**: A Java-based tool that uses XML files for configuration. It provides flexibility and cross-platform build automation.
   - **Maven**: Java-based, it automates dependency management, builds, and project structure using a standardized lifecycle and **POM.xml** configuration files.
   - **Gradle**: A flexible tool that supports both Java and non-Java languages, allowing custom build logic and dependency management. It uses Groovy/Kotlin syntax.

7. **What is Maven & POM.xml file? Example of POM file to use MySQL Connector**  
   Maven is a powerful build automation tool primarily for Java projects. It simplifies project build, dependency management, and deployment using a standardized project layout.  
   **POM.xml** (Project Object Model) is the configuration file for Maven, defining project dependencies, plugins, goals, and project information.  
   **Example POM.xml to use MySQL Connector**:
   ```xml
   <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
       <modelVersion>4.0.0</modelVersion>
       <groupId>com.example</groupId>
       <artifactId>mysql-connector-project</artifactId>
       <version>1.0-SNAPSHOT</version>
       <dependencies>
           <dependency>
               <groupId>mysql</groupId>
               <artifactId>mysql-connector-java</artifactId>
               <version>8.0.33</version>
           </dependency>
       </dependencies>
   </project>
   ```

8. **Explain RowSet and its Types**  
   RowSet is an extension of ResultSet in JDBC, allowing a disconnected model for handling data. Types include:
   - **CachedRowSet**: Stores data in memory, allowing access and modification without a continuous database connection.
   - **JdbcRowSet**: Works similarly to ResultSet but has additional navigation methods.
   - **WebRowSet**: Converts data to XML format, ideal for transferring data across web applications.
   - **FilteredRowSet**: Allows filtering data with custom filtering logic.
   - **JoinRowSet**: Combines data from multiple RowSets based on matching columns, similar to SQL joins.

9. **What is Design Patterns? Explain its Types**  
   Design patterns are reusable solutions to common software design challenges. Types include:
   - **Creational Patterns**: Handle object creation (e.g., Singleton, Factory, Builder).
   - **Structural Patterns**: Organize object relationships (e.g., Adapter, Composite, Decorator).
   - **Behavioral Patterns**: Define communication between objects (e.g., Observer, Strategy, Command).

10. **What is ERP? Explain key components involved**  
    ERP (Enterprise Resource Planning) systems unify business processes across an organization. Key components include:
    - **Financial Management**: Manages transactions, budgeting, and accounting.
    - **Human Resources**: Tracks employee information, payroll, and compliance.
    - **Inventory Management**: Manages stock levels, order processing, and supply chain logistics.
    - **Customer Relationship Management (CRM)**: Manages customer interactions, support, and sales activities.

11. **Explain execute, executeUpdate, executeQuery, executeLargeUpdate, executeBatch methods**  
    - **execute**: Executes any SQL command, returns `true` if a ResultSet is returned.
    - **executeUpdate**: For data modification statements (e.g., INSERT, UPDATE), returns the count of affected rows.
    - **executeQuery**: Executes a SELECT query, returning a ResultSet.
    - **executeLargeUpdate**: Similar to `executeUpdate`, designed for large datasets to return row counts as `long` values.
    - **executeBatch**: Executes a series of SQL statements in a batch, enhancing performance.

12. **Rules to write XML**  
    XML is strict in formatting. Key rules include:
    - Use a single root element to wrap all content.
    - Tags must be properly nested and closed.
    - Tags are case-sensitive (e.g., `<Tag>` ≠ `<tag>`).
    - Attribute values must be quoted, and special characters (like `&`, `<`, `>`) require escaping.

13. **Differences between Statement and PreparedStatement**  
    - **Statement**: Basic SQL execution, primarily for single-use queries without parameters.
    - **PreparedStatement**: Allows precompiled SQL statements with parameter placeholders, reducing SQL injection risks and improving performance when reused.

14. **Explain Maven Lifecycle**  
    Maven organizes the build process through phases:
    - **Clean**: Removes previous build artifacts.
    - **Default**: Manages the entire build, including compiling, testing, and packaging.
    - **Site**: Generates project documentation and reports.

15. **System Requirements to install Apache Maven-3.9.8**  
    Requirements for Apache Maven 3.9.8 include:
    - **Java Development Kit (JDK)**: Version 1.8 or higher; JDK 11 or newer is recommended.
    - **Memory**: At least 512 MB, with 1 GB or more for optimal performance.
    - **Disk Space**: Minimum 10 MB

---

1. **What is HTTP protocol?**  
   HTTP (HyperText Transfer Protocol) is a protocol used for transmitting data over the internet, allowing web browsers and servers to communicate. It is stateless and relies on requests (from the client) and responses (from the server). HTTP forms the foundation for any data exchange on the web, enabling actions like accessing websites and submitting form data.

2. **What is the architecture of HTTP protocol?**  
   HTTP follows a client-server architecture and is built on a request-response model:
   - **Client**: Sends HTTP requests for resources (e.g., HTML files, images) to a server.
   - **Server**: Receives requests, processes them, and sends back HTTP responses containing requested data or error messages.
   HTTP operates at the application layer, typically over TCP (Transmission Control Protocol) on port 80 (or HTTPS on port 443 for secure connections).

3. **What is a web client and web server?**  
   - **Web Client**: Any device or application (e.g., web browser) that sends HTTP requests to access resources on the internet.
   - **Web Server**: A system that listens for client requests, processes them, and responds with requested content, like web pages or files.

4. **What is a web application?**  
   A web application is a program accessed through a web browser and hosted on a web server. It typically combines client-side scripts (HTML, CSS, JavaScript) and server-side scripts (Java, PHP, .NET) to provide functionality such as login systems, data manipulation, and user interaction.

5. **Explain client-server architecture**  
   In client-server architecture:
   - **Client**: Initiates a request for resources or services.
   - **Server**: Responds to requests by processing data and sending back the required resources.
   This architecture separates application layers, allowing centralized control, security, and scalability.

6. **What is CGI and how does it handle requests?**  
   CGI (Common Gateway Interface) is a protocol for web servers to run external programs (scripts) that generate dynamic content. When a client makes an HTTP request, the server executes the CGI script, which processes the request and outputs HTML or other data back to the client.

7. **What is a servlet?**  
   A servlet is a Java-based web component that extends the capabilities of servers, typically to generate dynamic content. Servlets run on a web server, receive HTTP requests, process them, and return HTTP responses. They’re commonly used in Java-based web applications.

8. **What is a deployment descriptor?**  
   The deployment descriptor (typically `web.xml` file) is an XML configuration file in a Java web application that defines application settings, servlet mappings, session configurations, and security constraints. It resides in the `WEB-INF` folder.

9. **How do you create a dynamic web project?**  
   In Eclipse or similar IDEs:
   - Go to **File > New > Dynamic Web Project**.
   - Set a project name and target runtime (like Apache Tomcat).
   - Configure web module settings, such as context root and content directories.
   - Finish, and the IDE will create a directory structure with `WEB-INF`, `web.xml`, and other required files.

10. **How do you modify the web descriptor file?**  
   To modify `web.xml`:
   - Open `WEB-INF/web.xml` in your editor.
   - Update the XML to add or change servlet mappings, session configurations, security constraints, or error handling.
   - Save the file to apply changes.

11. **What is the use of an Apache Tomcat server?**  
   Apache Tomcat is an open-source web server and servlet container for running Java web applications. It supports servlets, JSPs (JavaServer Pages), and WebSocket, making it ideal for deploying and testing Java-based applications.

12. **How do you add a project to a web server and run the first servlet?**  
   - Add the project to the server through your IDE (e.g., in Eclipse, right-click on the project > **Run As > Run on Server**).
   - Configure the servlet mapping in `web.xml`.
   - Start the server, and navigate to the mapped URL (e.g., `http://localhost:8080/YourProject/YourServlet`) to run the servlet.

13. **What is the servlet lifecycle?**  
   The servlet lifecycle consists of:
   - **Loading and Instantiation**: The server loads and instantiates the servlet.
   - **Initialization** (`init` method): The server initializes the servlet.
   - **Service** (`service` method): The server calls this method to handle requests.
   - **Destruction** (`destroy` method): The server removes the servlet from memory.

14. **What are servlet lifecycle event methods?**  
   - **init()**: Initializes the servlet once when it is first loaded.
   - **service()**: Handles client requests.
   - **destroy()**: Cleans up resources when the servlet is taken out of service.

15. **What are other ways to create a servlet application?**  
   Besides using IDEs, servlet applications can be created by:
   - Manually writing servlets in a text editor.
   - Packaging them as a WAR file and deploying to a server.
   - Using frameworks like Spring MVC to abstract and simplify servlet creation.

16. **What is the servlet API?**  
   The servlet API is a set of interfaces and classes for writing servlets in Java, provided in the `jakarta.servlet` package. It includes `HttpServlet`, `ServletRequest`, `ServletResponse`, and other classes essential for handling web requests.

17. **What are the packages of the servlet API?**  
   The main packages in the servlet API are:
   - `jakarta.servlet`: Core interfaces and classes for servlets.
   - `jakarta.servlet.http`: HTTP-specific classes for handling HTTP requests and responses.
   - `jakarta.servlet.annotation`: Classes for servlet-related annotations.

18. **Explain the jakarta.servlet classes, interfaces, and exceptions**  
   - **Classes**: `GenericServlet`, `HttpServlet`.
   - **Interfaces**: `Servlet`, `ServletRequest`, `ServletResponse`, `HttpSession`.
   - **Exceptions**: `ServletException`, `UnavailableException` handle errors during servlet processing.

19. **What is ServletConfig and its use in an application?**  
   `ServletConfig` is an interface that provides configuration information for a specific servlet. It allows you to pass initialization parameters to servlets, and each servlet has its own `ServletConfig`.

20. **Explain servlet context and its use in a web application**  
   `ServletContext` represents the environment for the servlet, providing methods for logging, accessing resources, and sharing data between servlets in the application. It is unique to the entire application.

21. **What is Cookies?**  
   Cookies are small pieces of data stored by a web browser, used to retain user information like session identifiers, user preferences, and tracking data. Cookies allow websites to remember users and their actions across multiple sessions.

22. **What is Session?**  
   A session is a way to store user-specific data across multiple requests. In web applications, a session is created for each user, storing information like login credentials, shopping cart items, or other data for a specific period.

23. **How many ways are there to track a user?**  
   - **Cookies**: Store information on the client’s device.
   - **Session**: Store information on the server, identified by a session ID.
   - **URL Rewriting**: Adds session IDs to URLs.
   - **Hidden Form Fields**: Include hidden fields in forms to maintain state.

24. **What is requestDispatcher?**  
   `RequestDispatcher` is an interface used for forwarding a request to another resource (servlet, JSP) within the same server or including another resource’s content. It enables the chaining of resources within a web application.

25. **In Tomcat, what is CATALINA_HOME and why do we use it?**  
   `CATALINA_HOME` is an environment variable pointing to the installation directory of Apache Tomcat. It is used by Tomcat scripts and configurations to locate the server’s installation files, making it essential for server operations.

---

Here's an in-depth explanation for each question regarding JavaServer Pages (JSP):

---

1. **Explain the architecture of JSP. How does it compare to servlets in terms of request handling?**  
   JSP architecture is based on a model where Java code and HTML are embedded together, allowing web designers to create dynamic web pages. JSPs compile into servlets on the server-side:
   - **JSPs**: Focus more on presenting data, which makes them easier to use for front-end developers who mainly work with HTML.
   - **Servlets**: Primarily control the logic flow and handle business logic. JSPs use tags and directives, whereas servlets use Java code. JSPs simplify the process by automatically converting into servlets.

2. **Describe the role of JSP in a web application and how it interacts with other components such as servlets and databases.**  
   JSPs act as the **view layer** in MVC architecture, displaying data to users. JSPs interact with servlets (controller) to receive data from the backend. A servlet retrieves data from a database, processes it, and sends it to a JSP. The JSP then formats and displays this data for users.

3. **Illustrate the lifecycle of a JSP page with a detailed explanation of each phase.**  
   - **Translation**: The JSP page is converted into a servlet by the server.
   - **Compilation**: The servlet (generated from JSP) is compiled into bytecode.
   - **Initialization**: The servlet’s `jspInit()` method is called once.
   - **Execution**: The server invokes `jspService()` for every request.
   - **Destruction**: The `jspDestroy()` method is called when the servlet is terminated.

4. **What are the different methods involved in the lifecycle of a JSP page? Explain each method with its purpose.**  
   - **jspInit()**: Initializes resources when the JSP is first loaded.
   - **_jspService()**: Handles each request, processing data, and generating a response.
   - **jspDestroy()**: Cleans up resources when the JSP is unloaded.

5. **What are directive tags in JSP? List and explain the three main types of directive tags.**  
   Directive tags in JSP define global settings for the page:
   - **`<%@ page %>`**: Defines page-level attributes (e.g., importing classes).
   - **`<%@ include %>`**: Includes a file at the time of translation.
   - **`<%@ taglib %>`**: Declares a tag library for use in the JSP.

6. **How does the `<%@ page %>` directive influence the behavior of a JSP page? Provide examples.**  
   The `<%@ page %>` directive sets properties such as content type, error handling, and buffer size.
   ```jsp
   <%@ page language="java" contentType="text/html" errorPage="error.jsp" %>
   ```
   This directive specifies the content type and sets an error page.

7. **What is a scriptlet in JSP? How is it different from an expression? Provide an example of each.**  
   - **Scriptlet**: Java code inside `<% %>`, runs during request processing. Example: `<% int count = 5; %>`
   - **Expression**: Outputs a value directly to the response, in `<%= %>`. Example: `<%= count %>`

8. **Discuss the scope of variables declared inside a scriptlet. How does it affect the JSP page?**  
   Variables in scriptlets are scoped to the `jspService()` method. They are accessible within the JSP page but not outside.

9. **Explain the purpose of expressions in JSP. How are they evaluated and outputted on the client side?**  
   Expressions simplify outputting values by directly evaluating and displaying them in the response. The server evaluates the expression and outputs the result in HTML.

10. **Write a JSP page using expressions to calculate and display the sum of two numbers.**  
    ```jsp
    <% int a = 5; int b = 10; %>
    Sum: <%= a + b %>
    ```

11. **What is a declarative tag in JSP? How is it used to define methods and variables? Provide an example.**  
    Declarative tags (`<%! %>`) define methods and class-level variables. Example:
    ```jsp
    <%! int count = 0; public int getCount() { return count++; } %>
    ```

12. **Discuss the scope and lifecycle of methods and variables defined using declarative tags in JSP.**  
    Variables/methods in declarative tags persist across requests, acting like instance variables in a servlet.

13. **List and explain the various implicit objects available in JSP. How do they facilitate web development?**  
    - **request**: Encapsulates client request data.
    - **response**: Provides the server’s response.
    - **session**: Maintains user session data.
    - **application**: Shared across the application’s lifecycle.

14. **Write a JSP page demonstrating the use of at least three different implicit objects.**  
    ```jsp
    Welcome, <%= session.getAttribute("username") %>
    Current Date: <%= new java.util.Date() %>
    ```

15. **What are action tags in JSP? Describe their purpose and usage with examples.**  
    Action tags, like `<jsp:useBean>`, `<jsp:include>`, execute dynamic actions within JSP.
    ```jsp
    <jsp:useBean id="bean" class="MyBean" />
    ```

16. **Explain the `<jsp:include>` and `<jsp:forward>` action tags. How do they differ in functionality?**  
    - `<jsp:include>`: Includes another file’s content at runtime.
    - `<jsp:forward>`: Forwards the request to another resource.

17. **What is JSTL? How does it simplify JSP development?**  
    JSTL (JavaServer Pages Standard Tag Library) provides tags for common tasks (loops, conditions) and helps reduce Java code in JSPs.

18. **Provide examples of using JSTL core tags for iteration and conditional operations.**  
    ```jsp
    <c:forEach var="item" items="${items}">
        <c:if test="${item > 10}">
            ${item}
        </c:if>
    </c:forEach>
    ```

19. **What is Expression Language (EL) in JSP? How does it enhance the readability and maintainability of JSP pages?**  
    EL simplifies accessing data objects without scriptlets, improving readability. Example: `${username}` replaces `<%= session.getAttribute("username") %>`.

20. **Write a JSP page that demonstrates the use of EL to access and display data from request and session attributes.**  
    ```jsp
    Hello, ${sessionScope.username}
    Your last login was on ${requestScope.lastLoginDate}
    ```
---

Here's an in-depth explanation for each question regarding Hibernate in Java:

---

### 1. What is Hibernate? List out the advantages of Hibernate.

**Hibernate** is an open-source ORM (Object-Relational Mapping) framework for Java. It simplifies data interaction between Java applications and relational databases by mapping Java objects to database tables, allowing developers to write database queries using Java code rather than SQL. Hibernate also abstracts the complexities of database operations and improves data manipulation efficiency.

**Advantages of Hibernate:**
   - **Database Independence**: Hibernate supports multiple databases like MySQL, Oracle, and PostgreSQL without requiring changes to the application code.
   - **Lazy Loading**: Hibernate allows loading related data only when it’s accessed, which enhances performance.
   - **Caching**: Hibernate has a built-in caching mechanism that reduces database hits and improves performance.
   - **Automatic Table Generation**: Hibernate can automatically generate database tables from Java objects.
   - **Transaction Management**: Provides support for handling transactions to ensure data consistency.
   - **HQL (Hibernate Query Language)**: HQL is an object-oriented query language that simplifies complex SQL queries.

---

### 2. Difference between Hibernate and EJB

| Feature                  | Hibernate                                  | EJB (Enterprise JavaBeans)           |
|--------------------------|--------------------------------------------|--------------------------------------|
| **Purpose**              | Primarily used for ORM and database access | Used for handling transactions, business logic, and security |
| **Complexity**           | Easier to implement and configure          | More complex to implement            |
| **Database Independence**| High, supports various databases           | Limited compared to Hibernate        |
| **Caching**              | Supports both first- and second-level caching | Limited caching                      |
| **Transaction Management** | Manual or Spring-based transaction management | Integrated, managed by EJB container |
| **Usage Scope**          | Suitable for persistence, data management  | Suitable for enterprise-level applications with complex requirements |

---

### 3. Explain the Hibernate architecture in detail (Explain all persistence objects)

Hibernate architecture consists of the following components:

   - **Configuration Object**: Loads and configures the Hibernate settings from XML files (hibernate.cfg.xml) and is used to create the `SessionFactory`.
   - **SessionFactory**: A thread-safe factory object created once per application. It provides sessions to interact with the database.
   - **Session**: A session object is a lightweight, non-thread-safe object used to interact with the database. It represents a single unit of work (transaction).
   - **Transaction**: Handles database transactions. It ensures that data changes are consistent and can be rolled back in case of errors.
   - **Query**: Used to execute HQL or native SQL queries against the database.
   - **Criteria**: Allows building type-safe, programmatic queries without writing HQL.
   - **Persistent Objects**: These are Java objects mapped to database tables. They’re managed by Hibernate and contain the data that is saved, retrieved, or updated in the database.

---

### 4. Consider the below class, DataMembers and create a Hibernate mapping file.

Given the `Employee` class with data members: `EmpID`, `EmpName`, `Designation`, `DateOfBirth`, and `Deptno`.

**Mapping File (Employee.hbm.xml):**
```xml
<!DOCTYPE hibernate-mapping PUBLIC "-//Hibernate/Hibernate Mapping DTD//EN" "http://hibernate.sourceforge.net/hibernate-mapping-3.0.dtd">
<hibernate-mapping>
   <class name="Employee" table="EMPLOYEE">
      <id name="EmpID" column="EMP_ID">
         <generator class="native"/>
      </id>
      <property name="EmpName" column="EMP_NAME"/>
      <property name="Designation" column="DESIGNATION"/>
      <property name="DateOfBirth" column="DATE_OF_BIRTH"/>
      <property name="Deptno" column="DEPT_NO"/>
   </class>
</hibernate-mapping>
```

---

### 5. What is a collection? Explain Set and List collection with an example.

In Hibernate, a **collection** is a group of objects in a single variable. Collections can be mapped to represent relationships between entities (e.g., one-to-many, many-to-many).

   - **Set**: Ensures uniqueness; no duplicate elements are allowed.
   - **List**: Allows duplicate elements and maintains insertion order.

**Example of Set and List in Hibernate Mapping:**
```xml
<!-- List Collection -->
<list name="employees" table="EMPLOYEES">
   <key column="DEPT_ID"/>
   <list-index column="POSITION"/>
   <one-to-many class="Employee"/>
</list>

<!-- Set Collection -->
<set name="departments" table="DEPARTMENTS">
   <key column="ORG_ID"/>
   <one-to-many class="Department"/>
</set>
```

---

### 6. What is association (Relationship)? Explain types of associations (One-to-One, One-to-Many, Many-to-Many, and Many-to-One) in detail.

In Hibernate, an **association** represents a relationship between two entities, which is mapped as follows:

   - **One-to-One**: Each record in Table A relates to a single record in Table B.
   - **One-to-Many**: Each record in Table A relates to multiple records in Table B.
   - **Many-to-One**: Multiple records in Table A relate to a single record in Table B.
   - **Many-to-Many**: Multiple records in Table A relate to multiple records in Table B, typically using a join table.

---

### 7. Consider the below class, DataMembers and implement Java-based configuration.

Given the `Customer` class with data members: `CustomerID`, `CustFullName`, `CustAddress`, `CustCity`, `CustMobile`, `CustState`, `CustEmail`.

**Java Configuration Example:**
```java
import org.hibernate.cfg.Configuration;

Configuration config = new Configuration();
config.addAnnotatedClass(Customer.class);
config.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
config.setProperty("hibernate.connection.url", "jdbc:mysql://localhost:3306/mydb");
config.setProperty("hibernate.connection.username", "user");
config.setProperty("hibernate.connection.password", "password");
SessionFactory sessionFactory = config.buildSessionFactory();
```

---

### 8. What is HQL? Explain the usage of HQL in Hibernate.

**Hibernate Query Language (HQL)** is an object-oriented query language, similar to SQL but focuses on entities rather than database tables. HQL is used for CRUD operations, pagination, joins, and aggregate functions.

**Example of HQL Usage:**
```java
String hql = "FROM Customer WHERE city = :city";
Query query = session.createQuery(hql);
query.setParameter("city", "New York");
List<Customer> customers = query.list();
```

---

### 9. Explain the below methods

- **createQuery()**: Creates a query instance for executing HQL.
   ```java
   Query query = session.createQuery("FROM Employee");
   ```
- **executeUpdate()**: Executes update or delete operations in HQL.
   ```java
   query.executeUpdate();
   ```
- **setParameter()**: Sets a named or positional parameter in a query.
   ```java
   query.setParameter("name", "John");
   ```

---

### 10. Write code to implement a one-to-one relation.

**Example Code for One-to-One Relationship:**
```java
@Entity
public class Employee {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int empId;
   private String name;

   @OneToOne(cascade = CascadeType.ALL)
   @JoinColumn(name = "address_id")
   private Address address;
}

@Entity
public class Address {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int id;
   private String street;
   private String city;
}
```

The above code sets up a one-to-one relationship where each employee has one address. The `@OneToOne` annotation in `Employee` specifies this relationship, and the `@JoinColumn` denotes the foreign key in the `Employee` table.

---

Here’s a detailed explanation for each question related to the Spring Framework:

---

### Q1: What is the difference between BeanFactory and ApplicationContext? Give an example of how to implement BeanFactory in Spring.

**BeanFactory** and **ApplicationContext** are both interfaces in the Spring framework for dependency injection and managing beans. However, there are some important differences:

- **BeanFactory**:
  - It is the basic, low-level container in Spring for managing beans.
  - Only initializes beans on demand, making it more memory efficient.
  - Does not support additional features like event propagation, declarative mechanisms, and certain integrations.

- **ApplicationContext**:
  - Extends BeanFactory and provides additional functionality like event propagation, internationalization, and AOP.
  - It eagerly loads beans at startup, which can lead to slightly higher memory consumption but ensures beans are fully configured when the application is ready.
  - Commonly used in most Spring applications.

**Example of BeanFactory in Spring**:
To use BeanFactory, we can define beans in an XML configuration file and load them using `XmlBeanFactory`.

```java
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

public class Main {
    public static void main(String[] args) {
        BeanFactory factory = new XmlBeanFactory(new ClassPathResource("beans.xml"));
        MyBean myBean = (MyBean) factory.getBean("myBean");
        myBean.sayHello();
    }
}
```

In this example, `XmlBeanFactory` loads the configuration from `beans.xml`, and we retrieve the bean by calling `getBean()`.

---

### Q2: What is Spring Framework? Explain different modules of Spring framework.

**Spring Framework** is a powerful, lightweight framework for building Java-based enterprise applications. It supports dependency injection, aspect-oriented programming, and provides various modules for developing web applications, managing data access, and integrating with other systems.

**Modules of Spring Framework**:

1. **Core Container**:
   - **Core and Beans**: Fundamental parts providing IoC and DI.
   - **Context**: Provides enterprise-level services and configuration.
   - **Expression Language**: A powerful expression language for querying and manipulating objects.

2. **AOP (Aspect-Oriented Programming)**:
   - Allows adding additional behavior (like logging or security) without changing business logic. Supports aspect-oriented programming.

3. **Data Access/Integration**:
   - **JDBC**: Simplifies JDBC usage and reduces boilerplate code.
   - **ORM**: Integrates with ORM frameworks like Hibernate.
   - **Transaction Management**: Supports programmatic and declarative transaction management.
   - **Messaging**: Enables sending and receiving messages within the Spring framework.
   - **OXM**: Supports Object/XML mapping.

4. **Web and MVC**:
   - **Web Module**: Supports web-based applications.
   - **Spring MVC**: Provides MVC architecture, making it easier to develop web applications.
   - **WebSocket**: Supports WebSocket communication for real-time applications.

5. **Test**: Supports integration and unit testing with JUnit and TestNG.

---

### Q3: What is Autowire? Explain types of Autowire.

**Autowiring** in Spring automatically injects the dependent beans, reducing boilerplate code. Spring offers several types of autowiring:

   - **byType**: Automatically wires a bean by matching the type of the property with the type of a bean in the configuration.
   - **byName**: Automatically wires a bean by the property name. If the property name matches a bean name, it’s injected.
   - **constructor**: Uses the constructor for autowiring. Matches parameters with beans available in the configuration.
   - **autodetect**: Automatically chooses between `constructor` and `byType` for wiring based on which matches.

---

### Q4: Explain @Component, @Bean with an example.

- **@Component**: Marks a Java class as a Spring-managed component. Spring automatically detects classes annotated with `@Component` and registers them in the context.

   ```java
   @Component
   public class MyService {
       public void performAction() {
           System.out.println("Action performed");
       }
   }
   ```

- **@Bean**: Used in configuration classes to define Spring beans explicitly. Beans declared with `@Bean` provide full control over bean configuration.

   ```java
   @Configuration
   public class AppConfig {
       @Bean
       public MyService myService() {
           return new MyService();
       }
   }
   ```

In this example, both `@Component` and `@Bean` register `MyService` as a bean in the Spring context, but `@Bean` allows for more customization.

---

### Q5: What is Spring MVC? Advantages of Spring MVC.

**Spring MVC** (Model-View-Controller) is a framework for building web applications in Spring. It’s based on the MVC design pattern, where:
   - **Model**: Holds application data.
   - **View**: Represents the UI, usually in HTML or JSP format.
   - **Controller**: Manages requests and returns views.

**Advantages of Spring MVC**:
   - **Flexible and Configurable**: Supports different view technologies like JSP, Thymeleaf, and FreeMarker.
   - **Easy Testing**: Supports testing with mocked objects.
   - **Clear Separation of Concerns**: Divides application logic into different roles, making it easier to manage and test.
   - **Built-in Form Handling and Validation**: Supports form binding, validation, and error handling.

---

### Q6: What is Inversion of Control (IoC) in the context of the Spring Framework, and how does it facilitate loose coupling?

**Inversion of Control (IoC)** is a principle where control of object creation and dependency management is transferred from the application code to the Spring container. With IoC, instead of classes creating their dependencies, the Spring container injects the dependencies when needed, facilitating **loose coupling** by:
   - Making components independent of each other.
   - Allowing components to be replaced or modified without changing dependent classes.
   - Enabling easy testing by allowing dependencies to be mocked or stubbed.

---

### Q7: What is Spring IoC Container? Explain the role of IoC container in a Spring application.

The **Spring IoC Container** is a core component responsible for managing and configuring application objects. It uses Dependency Injection (DI) to instantiate and wire beans, making sure all dependencies are provided at runtime.

**Role of IoC Container in Spring**:
   - **Bean Lifecycle Management**: The IoC container creates, configures, and manages the entire lifecycle of beans.
   - **Dependency Injection**: Manages dependencies between objects by injecting required dependencies.
   - **Configuration Management**: Reads configuration metadata from XML files, annotations, or Java code to know which beans to create and how to wire them.

The IoC container is fundamental to Spring applications, allowing them to be modular, testable, and loosely coupled.
