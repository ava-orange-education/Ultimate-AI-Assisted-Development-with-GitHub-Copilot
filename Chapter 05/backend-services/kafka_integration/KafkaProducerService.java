// Prompt Used: Create a Kafka producer service using Spring Boot to send messages to a Kafka topic

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {

    private static final String TOPIC = "orders";

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendOrder(String order) {
        kafkaTemplate.send(TOPIC, order);
    }
}
