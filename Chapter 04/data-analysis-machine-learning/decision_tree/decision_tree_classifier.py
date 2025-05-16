# Prompt Used: Write a Python script to train a decision tree classifier using scikit-learn

from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

def train_decision_tree():
    """Train a Decision Tree Classifier on the Iris dataset."""
    # Load dataset
    iris = load_iris()
    X_train, X_test, y_train, y_test = train_test_split(
        iris.data, iris.target, test_size=0.3, random_state=42
    )

    # Train the model
    clf = DecisionTreeClassifier()
    clf.fit(X_train, y_train)

    # Make predictions
    y_pred = clf.predict(X_test)

    # Evaluate
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Decision Tree Classifier Accuracy: {accuracy:.2f}")

# Example usage:
if __name__ == "__main__":
    train_decision_tree()
